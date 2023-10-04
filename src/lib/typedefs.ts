/**
 * @typedef {Object} Account
 * @property {string} id - The unique identifier of the account.
 * @property {string} userId - The identifier of the user associated with the account.
 * @property {string} type - The type of the account.
 * @property {string} provider - The provider of the account.
 * @property {string} providerAccountId - The account identifier provided by the provider.
 * @property {string} [refresh_token] - The refresh token for the account.
 * @property {string} [access_token] - The access token for the account.
 * @property {number} [expires_at] - The expiration time of the account's access token.
 * @property {string} [token_type] - The type of token for the account.
 * @property {string} [scope] - The scope of the account.
 * @property {string} [id_token] - The ID token for the account.
 * @property {string} [session_state] - The session state of the account.
 * @property {User} user - The user associated with the account.
 */

/**
 * @typedef {Object} Session
 * @property {string} id - The unique identifier of the session.
 * @property {string} sessionToken - The unique session token.
 * @property {string} userId - The identifier of the user associated with the session.
 * @property {Date} expires - The expiration date and time of the session.
 * @property {User} user - The user associated with the session.
 */

/**
 * @typedef {Object} User
 * @property {string} id - The unique identifier of the user.
 * @property {string} [name] - The name of the user.
 * @property {string} [email] - The email address of the user.
 * @property {Account[]} accounts - A list of accounts associated with the user.
 * @property {Session[]} sessions - A list of sessions associated with the user.
 * @property {string} username - The username of the user.
 * @property {string} address - The address of the user.
 * @property {Date} created_date - The date the user was created.
 * @property {Subscription[]} subscriptions - A list of subscriptions associated with the user.
 * @property {SukuriPass} [pass] - The SukuriPass associated with the user.
 * @property {Project[]} Project - A list of projects associated with the user.
 * @property {Balance[]} balances - A list of balances associated with the user.
 */

/**
 * @typedef {Object} Subscription
 * @property {string} id - The unique identifier of the subscription.
 * @property {string} userId - The identifier of the user associated with the subscription.
 * @property {string} projectId - The identifier of the project associated with the subscription.
 * @property {string} tierId - The identifier of the tier associated with the subscription.
 * @property {Date} created_date - The date the subscription was created.
 * @property {Date} last_processed - The date the subscription was last processed.
 * @property {Date} expires - The expiration date of the subscription.
 * @property {boolean} should_continue - A flag indicating if the subscription should continue.
 * @property {number} priority - The priority of the subscription.
 * @property {User} user - The user associated with the subscription.
 * @property {Project} project - The project associated with the subscription.
 * @property {ProjectTier} tier - The tier associated with the subscription.
 */

/**
 * @typedef {Object} VerificationToken
 * @property {string} identifier - Unique identifier.
 * @property {string} token - Unique token.
 * @property {Date} expires - Expiration date and time.
 */

/**
 * @typedef {Object} SukuriPass
 * @property {string} id - Unique identifier.
 * @property {string} [trim] - Trim option.
 * @property {string} [background] - Background option.
 * @property {string} [foil] - Foil option.
 * @property {User[]} User - List of users associated with the SukuriPass.
 */

/**
 * @typedef {Object} Project
 * @property {string} id - Unique identifier.
 * @property {string} name - Project name.
 * @property {string} short_description - Short description of the project.
 * @property {string} long_description - Detailed description of the project.
 * @property {string} [thumbnail_image] - URL for the project's thumbnail image.
 * @property {string} [large_image] - URL for the project's large image.
 * @property {number} chain_id - Chain id of the project.
 * @property {number} [member_count] - Number of members in the project.
 * @property {boolean} is_erc721 - Whether the project is ERC721.
 * @property {boolean} [is_featured] - Whether the project is featured.
 * @property {Date} created_date - Project creation date.
 * @property {ProjectPayment[]} accepted_payments - Accepted payment methods.
 * @property {ProjectTier[]} tiers - Project tiers.
 * @property {Subscription[]} subscriptions - Subscriptions associated with the project.
 * @property {string} [userId] - User identifier associated with the project.
 * @property {User} [User] - User associated with the project.
 */

/**
 * @typedef {Object} Balance
 * @property {string} id - Unique identifier.
 * @property {string} userId - User identifier associated with the balance.
 * @property {string} token - Token identifier.
 * @property {BigInt} balance - Balance amount.
 * @property {Date} updatedAt - Date when the balance was last updated.
 * @property {User} user - User associated with the balance.
 * @property {PaymentOption} PaymentOption - Payment option associated with the balance.
 */

/**
 * @typedef {Object} PaymentOption
 * @property {string} token - Token identifier.
 * @property {string} name - Payment option name.
 * @property {string} symbol - Payment option symbol.
 * @property {boolean} is_eth - Whether the payment option is Ethereum.
 * @property {ProjectPayment[]} projects - Projects associated with the payment option.
 * @property {Balance[]} balances - Balances associated with the payment option.
 */

/**
 * @typedef {Object} ProjectPayment
 * @property {string} projectId - Project identifier.
 * @property {string} token - Token identifier.
 * @property {Project} Project - Project associated with the payment.
 * @property {PaymentOption} Payment - Payment option associated with the project payment.
 */

/**
 * @typedef {Object} ProjectTier
 * @property {string} id - Unique identifier.
 * @property {string} address - Tier address.
 * @property {number} tier_id - Tier identifier.
 * @property {string} name - Tier name.
 * @property {string} price - Tier price.
 * @property {string} unit - Unit of tier price.
 * @property {number} supply - Tier supply.
 * @property {number} filled - Filled tier amount.
 * @property {number} subscription_length - Subscription length associated with the tier.
 * @property {string} subscription_length_unit - Unit of subscription length.
 * @property {string} description - Tier description.
 * @property {string[]} features - Features associated with the tier.
 * @property {Date} created_date - Tier creation date.
 * @property {Project} [Project] - Project associated with the tier.
 * @property {string} [projectId] - Project identifier associated with the tier.
 * @property {Subscription[]} Subscription - Subscriptions associated with the tier.
 */
