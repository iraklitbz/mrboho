export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContenfull = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadataContenfull;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollectionsContenfull>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: SysContenfull;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetcontentTypeContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetdescriptionContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetfileNameContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetheightContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetlinkedFromContenfullArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetsizeContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssettitleContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AsseturlContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptionsContenfull>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetwidthContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollectionContenfull = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<AssetContenfull>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilterContenfull = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilterContenfull>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilterContenfull>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilterContenfull>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilterContenfull>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollectionsContenfull = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollectionContenfull>;
  heroCollection?: Maybe<HeroCollectionContenfull>;
  opticalGlassesCollection?: Maybe<OpticalGlassesCollectionContenfull>;
  opticalTypesCollection?: Maybe<OpticalTypesCollectionContenfull>;
  slidesCollection?: Maybe<SlidesCollectionContenfull>;
  sunglassesCollection?: Maybe<SunglassesCollectionContenfull>;
  sunglassesTypesCollection?: Maybe<SunglassesTypesCollectionContenfull>;
};


export type AssetLinkingCollectionsentryCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsheroCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsopticalGlassesCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsopticalTypesCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsslidesCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionssunglassesCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionssunglassesTypesCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrderContenfull {
  contentType_ASC = 'contentType_ASC',
  contentType_DESC = 'contentType_DESC',
  fileName_ASC = 'fileName_ASC',
  fileName_DESC = 'fileName_DESC',
  height_ASC = 'height_ASC',
  height_DESC = 'height_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC',
  width_ASC = 'width_ASC',
  width_DESC = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/campaign) */
export type CampaignContenfull = EntryContenfull & _NodeContenfull & {
  __typename?: 'Campaign';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadataContenfull;
  linkedFrom?: Maybe<CampaignLinkingCollectionsContenfull>;
  onlyImages?: Maybe<Scalars['Boolean']['output']>;
  slidesCollection?: Maybe<CampaignSlidesCollectionContenfull>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: SysContenfull;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/campaign) */
export type CampaignlinkedFromContenfullArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/campaign) */
export type CampaignonlyImagesContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/campaign) */
export type CampaignslidesCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CampaignSlidesCollectionOrderContenfull>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SlidesFilterContenfull>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/campaign) */
export type CampaignslugContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/campaign) */
export type CampaigntitleContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CampaignCollectionContenfull = {
  __typename?: 'CampaignCollection';
  items: Array<Maybe<CampaignContenfull>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CampaignFilterContenfull = {
  AND?: InputMaybe<Array<InputMaybe<CampaignFilterContenfull>>>;
  OR?: InputMaybe<Array<InputMaybe<CampaignFilterContenfull>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilterContenfull>;
  onlyImages?: InputMaybe<Scalars['Boolean']['input']>;
  onlyImages_exists?: InputMaybe<Scalars['Boolean']['input']>;
  onlyImages_not?: InputMaybe<Scalars['Boolean']['input']>;
  slides?: InputMaybe<cfSlidesNestedFilterContenfull>;
  slidesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilterContenfull>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CampaignLinkingCollectionsContenfull = {
  __typename?: 'CampaignLinkingCollections';
  entryCollection?: Maybe<EntryCollectionContenfull>;
};


export type CampaignLinkingCollectionsentryCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CampaignOrderContenfull {
  onlyImages_ASC = 'onlyImages_ASC',
  onlyImages_DESC = 'onlyImages_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

export type CampaignSlidesCollectionContenfull = {
  __typename?: 'CampaignSlidesCollection';
  items: Array<Maybe<SlidesContenfull>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum CampaignSlidesCollectionOrderContenfull {
  headline_ASC = 'headline_ASC',
  headline_DESC = 'headline_DESC',
  onlyText_ASC = 'onlyText_ASC',
  onlyText_DESC = 'onlyText_DESC',
  privateName_ASC = 'privateName_ASC',
  privateName_DESC = 'privateName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadataContenfull = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConceptContenfull>>;
  tags: Array<Maybe<ContentfulTagContenfull>>;
};

export type ContentfulMetadataConceptsDescendantsFilterContenfull = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilterContenfull = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilterContenfull>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilterContenfull = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilterContenfull>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilterContenfull>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilterContenfull = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTagContenfull = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type EntryContenfull = {
  contentfulMetadata: ContentfulMetadataContenfull;
  sys: SysContenfull;
};

export type EntryCollectionContenfull = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<EntryContenfull>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilterContenfull = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilterContenfull>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilterContenfull>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilterContenfull>;
  sys?: InputMaybe<SysFilterContenfull>;
};

export enum EntryOrderContenfull {
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/hero) */
export type HeroContenfull = EntryContenfull & _NodeContenfull & {
  __typename?: 'Hero';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadataContenfull;
  image?: Maybe<AssetContenfull>;
  linkedFrom?: Maybe<HeroLinkingCollectionsContenfull>;
  sys: SysContenfull;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/hero) */
export type HeroimageContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/hero) */
export type HerolinkedFromContenfullArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/hero) */
export type HerotitleContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HeroCollectionContenfull = {
  __typename?: 'HeroCollection';
  items: Array<Maybe<HeroContenfull>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeroFilterContenfull = {
  AND?: InputMaybe<Array<InputMaybe<HeroFilterContenfull>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroFilterContenfull>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilterContenfull>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilterContenfull>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HeroLinkingCollectionsContenfull = {
  __typename?: 'HeroLinkingCollections';
  entryCollection?: Maybe<EntryCollectionContenfull>;
};


export type HeroLinkingCollectionsentryCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeroOrderContenfull {
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

export enum ImageFormatContenfull {
  AVIF = 'AVIF',
  /** JPG image format. */
  JPG = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JPG_PROGRESSIVE = 'JPG_PROGRESSIVE',
  /** PNG image format */
  PNG = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  PNG8 = 'PNG8',
  /** WebP image format. */
  WEBP = 'WEBP'
}

export enum ImageResizeFocusContenfull {
  /** Focus the resizing on the bottom. */
  BOTTOM = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  CENTER = 'CENTER',
  /** Focus the resizing on the largest face. */
  FACE = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  FACES = 'FACES',
  /** Focus the resizing on the left. */
  LEFT = 'LEFT',
  /** Focus the resizing on the right. */
  RIGHT = 'RIGHT',
  /** Focus the resizing on the top. */
  TOP = 'TOP',
  /** Focus the resizing on the top left. */
  TOP_LEFT = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TOP_RIGHT = 'TOP_RIGHT'
}

export enum ImageResizeStrategyContenfull {
  /** Crops a part of the original image to fit into the specified dimensions. */
  CROP = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  FILL = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  FIT = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  PAD = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  SCALE = 'SCALE',
  /** Creates a thumbnail from the image. */
  THUMB = 'THUMB'
}

export type ImageTransformOptionsContenfull = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormatContenfull>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocusContenfull>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategyContenfull>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalGlasses) */
export type OpticalGlassesContenfull = EntryContenfull & _NodeContenfull & {
  __typename?: 'OpticalGlasses';
  _id: Scalars['ID']['output'];
  categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  color?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contentfulMetadata: ContentfulMetadataContenfull;
  description?: Maybe<Scalars['String']['output']>;
  familie?: Maybe<OpticalTypesContenfull>;
  imagesCollection?: Maybe<AssetCollectionContenfull>;
  linkedFrom?: Maybe<OpticalGlassesLinkingCollectionsContenfull>;
  name?: Maybe<Scalars['String']['output']>;
  new?: Maybe<Scalars['Boolean']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  soldOut?: Maybe<Scalars['Boolean']['output']>;
  sys: SysContenfull;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalGlasses) */
export type OpticalGlassescategoriesContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalGlasses) */
export type OpticalGlassescolorContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalGlasses) */
export type OpticalGlassesdescriptionContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalGlasses) */
export type OpticalGlassesfamilieContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OpticalTypesFilterContenfull>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalGlasses) */
export type OpticalGlassesimagesCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalGlasses) */
export type OpticalGlasseslinkedFromContenfullArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalGlasses) */
export type OpticalGlassesnameContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalGlasses) */
export type OpticalGlassesnewContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalGlasses) */
export type OpticalGlassespriceContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalGlasses) */
export type OpticalGlassesslugContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalGlasses) */
export type OpticalGlassessoldOutContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type OpticalGlassesCollectionContenfull = {
  __typename?: 'OpticalGlassesCollection';
  items: Array<Maybe<OpticalGlassesContenfull>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type OpticalGlassesFilterContenfull = {
  AND?: InputMaybe<Array<InputMaybe<OpticalGlassesFilterContenfull>>>;
  OR?: InputMaybe<Array<InputMaybe<OpticalGlassesFilterContenfull>>>;
  categories_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_exists?: InputMaybe<Scalars['Boolean']['input']>;
  color_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilterContenfull>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  familie?: InputMaybe<cfOpticalTypesNestedFilterContenfull>;
  familie_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  new?: InputMaybe<Scalars['Boolean']['input']>;
  new_exists?: InputMaybe<Scalars['Boolean']['input']>;
  new_not?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_exists?: InputMaybe<Scalars['Boolean']['input']>;
  price_gt?: InputMaybe<Scalars['Float']['input']>;
  price_gte?: InputMaybe<Scalars['Float']['input']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  price_lt?: InputMaybe<Scalars['Float']['input']>;
  price_lte?: InputMaybe<Scalars['Float']['input']>;
  price_not?: InputMaybe<Scalars['Float']['input']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  soldOut?: InputMaybe<Scalars['Boolean']['input']>;
  soldOut_exists?: InputMaybe<Scalars['Boolean']['input']>;
  soldOut_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilterContenfull>;
};

export type OpticalGlassesLinkingCollectionsContenfull = {
  __typename?: 'OpticalGlassesLinkingCollections';
  entryCollection?: Maybe<EntryCollectionContenfull>;
  opticalTypesCollection?: Maybe<OpticalTypesCollectionContenfull>;
};


export type OpticalGlassesLinkingCollectionsentryCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type OpticalGlassesLinkingCollectionsopticalTypesCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<OpticalGlassesLinkingCollectionsOpticalTypesCollectionOrderContenfull>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum OpticalGlassesLinkingCollectionsOpticalTypesCollectionOrderContenfull {
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum OpticalGlassesOrderContenfull {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  new_ASC = 'new_ASC',
  new_DESC = 'new_DESC',
  price_ASC = 'price_ASC',
  price_DESC = 'price_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  soldOut_ASC = 'soldOut_ASC',
  soldOut_DESC = 'soldOut_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalTypes) */
export type OpticalTypesContenfull = EntryContenfull & _NodeContenfull & {
  __typename?: 'OpticalTypes';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadataContenfull;
  description?: Maybe<Scalars['String']['output']>;
  glassesCollection?: Maybe<OpticalTypesGlassesCollectionContenfull>;
  hero?: Maybe<AssetContenfull>;
  linkedFrom?: Maybe<OpticalTypesLinkingCollectionsContenfull>;
  mainImage?: Maybe<AssetContenfull>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: SysContenfull;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalTypes) */
export type OpticalTypesdescriptionContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalTypes) */
export type OpticalTypesglassesCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<OpticalTypesGlassesCollectionOrderContenfull>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OpticalGlassesFilterContenfull>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalTypes) */
export type OpticalTypesheroContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalTypes) */
export type OpticalTypeslinkedFromContenfullArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalTypes) */
export type OpticalTypesmainImageContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalTypes) */
export type OpticalTypesnameContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/opticalTypes) */
export type OpticalTypesslugContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type OpticalTypesCollectionContenfull = {
  __typename?: 'OpticalTypesCollection';
  items: Array<Maybe<OpticalTypesContenfull>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type OpticalTypesFilterContenfull = {
  AND?: InputMaybe<Array<InputMaybe<OpticalTypesFilterContenfull>>>;
  OR?: InputMaybe<Array<InputMaybe<OpticalTypesFilterContenfull>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilterContenfull>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  glasses?: InputMaybe<cfOpticalGlassesNestedFilterContenfull>;
  glassesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  hero_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mainImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilterContenfull>;
};

export type OpticalTypesGlassesCollectionContenfull = {
  __typename?: 'OpticalTypesGlassesCollection';
  items: Array<Maybe<OpticalGlassesContenfull>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum OpticalTypesGlassesCollectionOrderContenfull {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  new_ASC = 'new_ASC',
  new_DESC = 'new_DESC',
  price_ASC = 'price_ASC',
  price_DESC = 'price_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  soldOut_ASC = 'soldOut_ASC',
  soldOut_DESC = 'soldOut_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export type OpticalTypesLinkingCollectionsContenfull = {
  __typename?: 'OpticalTypesLinkingCollections';
  entryCollection?: Maybe<EntryCollectionContenfull>;
  opticalGlassesCollection?: Maybe<OpticalGlassesCollectionContenfull>;
};


export type OpticalTypesLinkingCollectionsentryCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type OpticalTypesLinkingCollectionsopticalGlassesCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<OpticalTypesLinkingCollectionsOpticalGlassesCollectionOrderContenfull>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum OpticalTypesLinkingCollectionsOpticalGlassesCollectionOrderContenfull {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  new_ASC = 'new_ASC',
  new_DESC = 'new_DESC',
  price_ASC = 'price_ASC',
  price_DESC = 'price_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  soldOut_ASC = 'soldOut_ASC',
  soldOut_DESC = 'soldOut_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum OpticalTypesOrderContenfull {
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export type QueryContenfull = {
  __typename?: 'Query';
  _node?: Maybe<_NodeContenfull>;
  asset?: Maybe<AssetContenfull>;
  assetCollection?: Maybe<AssetCollectionContenfull>;
  campaign?: Maybe<CampaignContenfull>;
  campaignCollection?: Maybe<CampaignCollectionContenfull>;
  entryCollection?: Maybe<EntryCollectionContenfull>;
  hero?: Maybe<HeroContenfull>;
  heroCollection?: Maybe<HeroCollectionContenfull>;
  opticalGlasses?: Maybe<OpticalGlassesContenfull>;
  opticalGlassesCollection?: Maybe<OpticalGlassesCollectionContenfull>;
  opticalTypes?: Maybe<OpticalTypesContenfull>;
  opticalTypesCollection?: Maybe<OpticalTypesCollectionContenfull>;
  slides?: Maybe<SlidesContenfull>;
  slidesCollection?: Maybe<SlidesCollectionContenfull>;
  sunglasses?: Maybe<SunglassesContenfull>;
  sunglassesCollection?: Maybe<SunglassesCollectionContenfull>;
  sunglassesTypes?: Maybe<SunglassesTypesContenfull>;
  sunglassesTypesCollection?: Maybe<SunglassesTypesCollectionContenfull>;
};


export type Query_nodeContenfullArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryassetContenfullArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryassetCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrderContenfull>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilterContenfull>;
};


export type QuerycampaignContenfullArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerycampaignCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CampaignOrderContenfull>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CampaignFilterContenfull>;
};


export type QueryentryCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrderContenfull>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilterContenfull>;
};


export type QueryheroContenfullArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryheroCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroOrderContenfull>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeroFilterContenfull>;
};


export type QueryopticalGlassesContenfullArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryopticalGlassesCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<OpticalGlassesOrderContenfull>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OpticalGlassesFilterContenfull>;
};


export type QueryopticalTypesContenfullArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryopticalTypesCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<OpticalTypesOrderContenfull>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OpticalTypesFilterContenfull>;
};


export type QueryslidesContenfullArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryslidesCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SlidesOrderContenfull>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SlidesFilterContenfull>;
};


export type QuerysunglassesContenfullArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerysunglassesCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SunglassesOrderContenfull>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SunglassesFilterContenfull>;
};


export type QuerysunglassesTypesContenfullArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerysunglassesTypesCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SunglassesTypesOrderContenfull>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SunglassesTypesFilterContenfull>;
};

/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/slides) */
export type SlidesContenfull = EntryContenfull & _NodeContenfull & {
  __typename?: 'Slides';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadataContenfull;
  headline?: Maybe<Scalars['String']['output']>;
  image?: Maybe<AssetContenfull>;
  linkedFrom?: Maybe<SlidesLinkingCollectionsContenfull>;
  onlyText?: Maybe<Scalars['Boolean']['output']>;
  privateName?: Maybe<Scalars['String']['output']>;
  sys: SysContenfull;
  text?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/slides) */
export type SlidesheadlineContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/slides) */
export type SlidesimageContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/slides) */
export type SlideslinkedFromContenfullArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/slides) */
export type SlidesonlyTextContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/slides) */
export type SlidesprivateNameContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/slides) */
export type SlidestextContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SlidesCollectionContenfull = {
  __typename?: 'SlidesCollection';
  items: Array<Maybe<SlidesContenfull>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SlidesFilterContenfull = {
  AND?: InputMaybe<Array<InputMaybe<SlidesFilterContenfull>>>;
  OR?: InputMaybe<Array<InputMaybe<SlidesFilterContenfull>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilterContenfull>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  onlyText?: InputMaybe<Scalars['Boolean']['input']>;
  onlyText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  onlyText_not?: InputMaybe<Scalars['Boolean']['input']>;
  privateName?: InputMaybe<Scalars['String']['input']>;
  privateName_contains?: InputMaybe<Scalars['String']['input']>;
  privateName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  privateName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  privateName_not?: InputMaybe<Scalars['String']['input']>;
  privateName_not_contains?: InputMaybe<Scalars['String']['input']>;
  privateName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilterContenfull>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not?: InputMaybe<Scalars['String']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SlidesLinkingCollectionsContenfull = {
  __typename?: 'SlidesLinkingCollections';
  campaignCollection?: Maybe<CampaignCollectionContenfull>;
  entryCollection?: Maybe<EntryCollectionContenfull>;
};


export type SlidesLinkingCollectionscampaignCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SlidesLinkingCollectionsCampaignCollectionOrderContenfull>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SlidesLinkingCollectionsentryCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SlidesLinkingCollectionsCampaignCollectionOrderContenfull {
  onlyImages_ASC = 'onlyImages_ASC',
  onlyImages_DESC = 'onlyImages_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

export enum SlidesOrderContenfull {
  headline_ASC = 'headline_ASC',
  headline_DESC = 'headline_DESC',
  onlyText_ASC = 'onlyText_ASC',
  onlyText_DESC = 'onlyText_DESC',
  privateName_ASC = 'privateName_ASC',
  privateName_DESC = 'privateName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglasses) */
export type SunglassesContenfull = EntryContenfull & _NodeContenfull & {
  __typename?: 'Sunglasses';
  _id: Scalars['ID']['output'];
  categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  color?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contentfulMetadata: ContentfulMetadataContenfull;
  description?: Maybe<Scalars['String']['output']>;
  familie?: Maybe<SunglassesTypesContenfull>;
  imagesCollection?: Maybe<AssetCollectionContenfull>;
  linkedFrom?: Maybe<SunglassesLinkingCollectionsContenfull>;
  name?: Maybe<Scalars['String']['output']>;
  new?: Maybe<Scalars['Boolean']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  soldOut?: Maybe<Scalars['Boolean']['output']>;
  sys: SysContenfull;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglasses) */
export type SunglassescategoriesContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglasses) */
export type SunglassescolorContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglasses) */
export type SunglassesdescriptionContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglasses) */
export type SunglassesfamilieContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SunglassesTypesFilterContenfull>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglasses) */
export type SunglassesimagesCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglasses) */
export type SunglasseslinkedFromContenfullArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglasses) */
export type SunglassesnameContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglasses) */
export type SunglassesnewContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglasses) */
export type SunglassespriceContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglasses) */
export type SunglassesslugContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglasses) */
export type SunglassessoldOutContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SunglassesCollectionContenfull = {
  __typename?: 'SunglassesCollection';
  items: Array<Maybe<SunglassesContenfull>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SunglassesFilterContenfull = {
  AND?: InputMaybe<Array<InputMaybe<SunglassesFilterContenfull>>>;
  OR?: InputMaybe<Array<InputMaybe<SunglassesFilterContenfull>>>;
  categories_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_exists?: InputMaybe<Scalars['Boolean']['input']>;
  color_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilterContenfull>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  familie?: InputMaybe<cfSunglassesTypesNestedFilterContenfull>;
  familie_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  new?: InputMaybe<Scalars['Boolean']['input']>;
  new_exists?: InputMaybe<Scalars['Boolean']['input']>;
  new_not?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_exists?: InputMaybe<Scalars['Boolean']['input']>;
  price_gt?: InputMaybe<Scalars['Float']['input']>;
  price_gte?: InputMaybe<Scalars['Float']['input']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  price_lt?: InputMaybe<Scalars['Float']['input']>;
  price_lte?: InputMaybe<Scalars['Float']['input']>;
  price_not?: InputMaybe<Scalars['Float']['input']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  soldOut?: InputMaybe<Scalars['Boolean']['input']>;
  soldOut_exists?: InputMaybe<Scalars['Boolean']['input']>;
  soldOut_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilterContenfull>;
};

export type SunglassesLinkingCollectionsContenfull = {
  __typename?: 'SunglassesLinkingCollections';
  entryCollection?: Maybe<EntryCollectionContenfull>;
  sunglassesTypesCollection?: Maybe<SunglassesTypesCollectionContenfull>;
};


export type SunglassesLinkingCollectionsentryCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SunglassesLinkingCollectionssunglassesTypesCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SunglassesLinkingCollectionsSunglassesTypesCollectionOrderContenfull>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SunglassesLinkingCollectionsSunglassesTypesCollectionOrderContenfull {
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum SunglassesOrderContenfull {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  new_ASC = 'new_ASC',
  new_DESC = 'new_DESC',
  price_ASC = 'price_ASC',
  price_DESC = 'price_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  soldOut_ASC = 'soldOut_ASC',
  soldOut_DESC = 'soldOut_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglassesTypes) */
export type SunglassesTypesContenfull = EntryContenfull & _NodeContenfull & {
  __typename?: 'SunglassesTypes';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadataContenfull;
  description?: Maybe<Scalars['String']['output']>;
  hero?: Maybe<AssetContenfull>;
  linkedFrom?: Maybe<SunglassesTypesLinkingCollectionsContenfull>;
  mainImage?: Maybe<AssetContenfull>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sunglassesCollection?: Maybe<SunglassesTypesSunglassesCollectionContenfull>;
  sys: SysContenfull;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglassesTypes) */
export type SunglassesTypesdescriptionContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglassesTypes) */
export type SunglassesTypesheroContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglassesTypes) */
export type SunglassesTypeslinkedFromContenfullArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglassesTypes) */
export type SunglassesTypesmainImageContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglassesTypes) */
export type SunglassesTypesnameContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglassesTypes) */
export type SunglassesTypesslugContenfullArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/4tddvybktz4p/content_types/sunglassesTypes) */
export type SunglassesTypessunglassesCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SunglassesTypesSunglassesCollectionOrderContenfull>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SunglassesFilterContenfull>;
};

export type SunglassesTypesCollectionContenfull = {
  __typename?: 'SunglassesTypesCollection';
  items: Array<Maybe<SunglassesTypesContenfull>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SunglassesTypesFilterContenfull = {
  AND?: InputMaybe<Array<InputMaybe<SunglassesTypesFilterContenfull>>>;
  OR?: InputMaybe<Array<InputMaybe<SunglassesTypesFilterContenfull>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilterContenfull>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hero_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mainImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sunglasses?: InputMaybe<cfSunglassesNestedFilterContenfull>;
  sunglassesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilterContenfull>;
};

export type SunglassesTypesLinkingCollectionsContenfull = {
  __typename?: 'SunglassesTypesLinkingCollections';
  entryCollection?: Maybe<EntryCollectionContenfull>;
  sunglassesCollection?: Maybe<SunglassesCollectionContenfull>;
};


export type SunglassesTypesLinkingCollectionsentryCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SunglassesTypesLinkingCollectionssunglassesCollectionContenfullArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SunglassesTypesLinkingCollectionsSunglassesCollectionOrderContenfull>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SunglassesTypesLinkingCollectionsSunglassesCollectionOrderContenfull {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  new_ASC = 'new_ASC',
  new_DESC = 'new_DESC',
  price_ASC = 'price_ASC',
  price_DESC = 'price_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  soldOut_ASC = 'soldOut_ASC',
  soldOut_DESC = 'soldOut_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum SunglassesTypesOrderContenfull {
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export type SunglassesTypesSunglassesCollectionContenfull = {
  __typename?: 'SunglassesTypesSunglassesCollection';
  items: Array<Maybe<SunglassesContenfull>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SunglassesTypesSunglassesCollectionOrderContenfull {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  new_ASC = 'new_ASC',
  new_DESC = 'new_DESC',
  price_ASC = 'price_ASC',
  price_DESC = 'price_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  soldOut_ASC = 'soldOut_ASC',
  soldOut_DESC = 'soldOut_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export type SysContenfull = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilterContenfull = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConceptContenfull = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

export type _NodeContenfull = {
  _id: Scalars['ID']['output'];
};

export type cfOpticalGlassesNestedFilterContenfull = {
  AND?: InputMaybe<Array<InputMaybe<cfOpticalGlassesNestedFilterContenfull>>>;
  OR?: InputMaybe<Array<InputMaybe<cfOpticalGlassesNestedFilterContenfull>>>;
  categories_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_exists?: InputMaybe<Scalars['Boolean']['input']>;
  color_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilterContenfull>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  familie_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  new?: InputMaybe<Scalars['Boolean']['input']>;
  new_exists?: InputMaybe<Scalars['Boolean']['input']>;
  new_not?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_exists?: InputMaybe<Scalars['Boolean']['input']>;
  price_gt?: InputMaybe<Scalars['Float']['input']>;
  price_gte?: InputMaybe<Scalars['Float']['input']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  price_lt?: InputMaybe<Scalars['Float']['input']>;
  price_lte?: InputMaybe<Scalars['Float']['input']>;
  price_not?: InputMaybe<Scalars['Float']['input']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  soldOut?: InputMaybe<Scalars['Boolean']['input']>;
  soldOut_exists?: InputMaybe<Scalars['Boolean']['input']>;
  soldOut_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilterContenfull>;
};

export type cfOpticalTypesNestedFilterContenfull = {
  AND?: InputMaybe<Array<InputMaybe<cfOpticalTypesNestedFilterContenfull>>>;
  OR?: InputMaybe<Array<InputMaybe<cfOpticalTypesNestedFilterContenfull>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilterContenfull>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  glassesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  hero_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mainImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilterContenfull>;
};

export type cfSlidesNestedFilterContenfull = {
  AND?: InputMaybe<Array<InputMaybe<cfSlidesNestedFilterContenfull>>>;
  OR?: InputMaybe<Array<InputMaybe<cfSlidesNestedFilterContenfull>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilterContenfull>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  onlyText?: InputMaybe<Scalars['Boolean']['input']>;
  onlyText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  onlyText_not?: InputMaybe<Scalars['Boolean']['input']>;
  privateName?: InputMaybe<Scalars['String']['input']>;
  privateName_contains?: InputMaybe<Scalars['String']['input']>;
  privateName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  privateName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  privateName_not?: InputMaybe<Scalars['String']['input']>;
  privateName_not_contains?: InputMaybe<Scalars['String']['input']>;
  privateName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilterContenfull>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not?: InputMaybe<Scalars['String']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type cfSunglassesNestedFilterContenfull = {
  AND?: InputMaybe<Array<InputMaybe<cfSunglassesNestedFilterContenfull>>>;
  OR?: InputMaybe<Array<InputMaybe<cfSunglassesNestedFilterContenfull>>>;
  categories_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_exists?: InputMaybe<Scalars['Boolean']['input']>;
  color_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilterContenfull>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  familie_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  new?: InputMaybe<Scalars['Boolean']['input']>;
  new_exists?: InputMaybe<Scalars['Boolean']['input']>;
  new_not?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_exists?: InputMaybe<Scalars['Boolean']['input']>;
  price_gt?: InputMaybe<Scalars['Float']['input']>;
  price_gte?: InputMaybe<Scalars['Float']['input']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  price_lt?: InputMaybe<Scalars['Float']['input']>;
  price_lte?: InputMaybe<Scalars['Float']['input']>;
  price_not?: InputMaybe<Scalars['Float']['input']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  soldOut?: InputMaybe<Scalars['Boolean']['input']>;
  soldOut_exists?: InputMaybe<Scalars['Boolean']['input']>;
  soldOut_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilterContenfull>;
};

export type cfSunglassesTypesNestedFilterContenfull = {
  AND?: InputMaybe<Array<InputMaybe<cfSunglassesTypesNestedFilterContenfull>>>;
  OR?: InputMaybe<Array<InputMaybe<cfSunglassesTypesNestedFilterContenfull>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilterContenfull>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hero_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mainImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sunglassesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilterContenfull>;
};
