export interface Account {
    id: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string;
    access_token?: string;
    expires_at?: number;
    token_type?: string;
    scope?: string;
    id_token?: string;
    session_state?: string;
    user: User;
}

export interface Session {
    id: string;
    sessionToken: string;
    userId: string;
    expires: Date;
    user: User;
}

export interface User {
    id: string;
    name?: string;
    email?: string;
    accounts: Account[];
    sessions: Session[];
    username: string;
    address: string;
    created_date: Date;
    subscriptions: Subscription[];
    pass?: SukuriPass;
    Project: Project[];
    balances: Balance[];
}

export interface Subscription {
    id: string;
    userId: string;
    projectId: string;
    tierId: string;
    created_date: Date;
    last_processed: Date;
    expires: Date;
    should_continue: boolean;
    priority: number;
    user: User;
    project: Project;
    tier: ProjectTier;
}

export interface VerificationToken {
    identifier: string;
    token: string;
    expires: Date;
}

export interface SukuriPass {
    id: string;
    trim?: string;
    background?: string;
    foil?: string;
    User: User[];
}

export interface Project {
    id: string;
    name: string;
    short_description: string;
    long_description: string;
    thumbnail_image?: string;
    large_image?: string;
    chain_id: number;
    member_count?: number;
    is_erc721: boolean;
    is_featured?: boolean;
    created_date: Date;
    accepted_payments: ProjectPayment[];
    tiers: ProjectTier[];
    subscriptions: Subscription[];
    userId?: string;
    User?: User;
}

export interface Balance {
    id: string;
    userId: string;
    token: string;
    balance: bigint;
    updatedAt: Date;
    user: User;
    PaymentOption: PaymentOption;
}

export interface PaymentOption {
    token: string;
    name: string;
    symbol: string;
    is_eth: boolean;
    projects: ProjectPayment[];
    balances: Balance[];
}

export interface ProjectPayment {
    projectId: string;
    token: string;
    Project: Project;
    Payment: PaymentOption;
}

export interface ProjectTier {
    id: string;
    address: string;
    tier_id: number;
    name: string;
    price: string;
    unit: string;
    supply: number;
    filled: number;
    subscription_length: number;
    subscription_length_unit: string;
    description: string;
    features: string[];
    created_date: Date;
    Project?: Project;
    Subscription: Subscription[];
}

export interface SignInInputSchema {
    signature: string,
    username: string,
    ethAddress: string,
    timestamp: string,
    nonce: string
}

export interface SignUpInputSchema {
    signature: string,
    username: string,
    ethAddress: string,
    timestamp: string,
    nonce: string
}

export interface EthereumProviderConfig {
    endpoint: string;
    nftContractAddress: string;
}