import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

import initializeBundleAnalyzer from '@next/bundle-analyzer';

// https://www.npmjs.com/package/@next/bundle-analyzer
const withBundleAnalyzer = initializeBundleAnalyzer({
    enabled: process.env.BUNDLE_ANALYZER_ENABLED === 'true'
});

export default withBundleAnalyzer((phase: string): NextConfig => ({
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
    ...(phase !== PHASE_DEVELOPMENT_SERVER ? { output: 'standalone' } : {})
}));
