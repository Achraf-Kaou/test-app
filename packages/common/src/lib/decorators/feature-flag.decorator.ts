import { SetMetadata } from '@nestjs/common';
import { FEATURE_METADATA } from '@packages/constants';
import { FeatureEnum } from '@packages/contracts';

export const FeatureFlag = (feature: FeatureEnum) => SetMetadata(FEATURE_METADATA, feature);
