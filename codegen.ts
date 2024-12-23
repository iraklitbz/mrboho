import process from 'node:process'
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    generates: {
        './types/contenfull-types.ts': {
            schema: `${process.env.GQL_HOST}?access_token=${process.env.CPA_TOKEN}`,
            config: {
                namingConvention: {
                    typeNames: (str: string) => {
                        return !str.includes('Contenfull') ? `${str}Contenfull` : str
                    },
                    enumValues: 'keep',
                },
            },
            plugins: ['typescript'],
        },
    },
}
export default config
