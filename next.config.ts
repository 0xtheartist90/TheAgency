import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

import initializeBundleAnalyzer from '@next/bundle-analyzer';

// https://www.npmjs.com/package/@next/bundle-analyzer
const withBundleAnalyzer = initializeBundleAnalyzer({
    enabled: process.env.BUNDLE_ANALYZER_ENABLED === 'true'
});

export default withBundleAnalyzer((phase: string): NextConfig => ({
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
    // Vercel expects the standard Next.js build output. Keep standalone output
    // only for non-Vercel production builds such as local Docker images.
    ...(phase !== PHASE_DEVELOPMENT_SERVER && process.env.VERCEL !== '1'
        ? { output: 'standalone' }
        : {})
}));
