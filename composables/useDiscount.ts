
export const useDiscount = () => {
    const supabase = useSupabaseClient()

    const applyDiscount = async (code: string) => {
        const validation = await validateDiscount(code);
        if (!validation.valid) return validation;

        const { data, error } = await supabase
            .from('discount_codes')
            .update({ current_usage: validation.discount.current_usage + 1 })
            .eq('id', validation.discount.id)
            .select()
            .single();

        if (error) return { valid: false, message: 'Error al aplicar descuento' };

        return { valid: true, message: 'Descuento aplicado', discount: data };
    };

    return { validateDiscount }
};
