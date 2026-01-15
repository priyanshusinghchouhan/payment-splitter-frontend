'use client';

import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';


const config = getDefaultConfig({
    appName: 'Payment Splitter',
    projectId: '1f9736ac8720848b24ee28f303f903db',
    chains: [sepolia],
    ssr: true,
});

const queryClient = new QueryClient();

export function Providers({children}: {children: React.ReactNode}) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}