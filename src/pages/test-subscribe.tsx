import React, { useState } from 'react';
import { api } from '@/utils/api';

/**
 * This is a test page for subscription operations, including:
 * - Fetching a subscription by ID
 * - Fetching all subscriptions with sorting options
 * It was assisted by ChatGPT from OpenAI.
 */
const SubscriptionPage: React.FC = () => {
  const [subscriptionId, setSubscriptionId] = useState<string | undefined>(
    undefined,
  );
  const [sortBy, setSortBy] = useState('id');
  const [asc, setAsc] = useState(true);

  // Set up your hooks to use the queries and mutations related to subscriptions
  const getSubscriptionQuery = api.subscribe.get.useQuery({
    id: subscriptionId,
    sortBy,
    asc,
  });

  // Update your UI elements and behavior based on the state of the queries and mutations
  if (getSubscriptionQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (getSubscriptionQuery.isError) {
    return (
      <p>Error loading subscription: {getSubscriptionQuery.error.message}</p>
    );
  }

  // You may want to map through the data if get function can return multiple subscriptions
  const subscriptionData = getSubscriptionQuery.data;
  const subscriptionList = subscriptionData
    ? Array.isArray(subscriptionData)
      ? subscriptionData
      : [subscriptionData]
    : [];

  return (
    <div>
      <h1>Subscription Operations</h1>
      {/* Subscription Retrieval Form */}
      <div>
        <h2>Fetch Subscription</h2>
        <input
          type='text'
          value={subscriptionId || ''}
          onChange={(e) => setSubscriptionId(e.target.value)}
          placeholder='Subscription ID'
        />
        <button onClick={() => setSubscriptionId(subscriptionId)}>
          Fetch Subscription
        </button>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value='id'>ID</option>
          {/* Add other sortable fields as options */}
        </select>
        <select onChange={(e) => setAsc(e.target.value === 'true')}>
          <option value='true'>Asc</option>
          <option value='false'>Desc</option>
        </select>
      </div>
      {/* Subscription Display Section */}
      <div>
        <h2>Subscription Data</h2>
        <ul>
          {subscriptionList.map((sub) => (
            <li key={sub.id}>
              {sub.id} {/* Render other subscription fields as necessary */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubscriptionPage;
