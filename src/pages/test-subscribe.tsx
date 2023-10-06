import React, { useState, useEffect } from 'react';
import { api } from '@/utils/api';
import { Subscription } from '@/lib/models';
import { Subscription as PrismSubscription } from '@prisma/client';
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
  const [activeSubscriptions, setActiveSubscriptions] = useState<
    PrismSubscription[] | undefined
  >(undefined);

  const getSubscriptionQuery = api.subscribe.get.useQuery({
    id: subscriptionId,
    sortBy,
    asc,
  });

  const getActiveSubscriptionQuery = api.subscribe.getActive.useQuery({
    sortBy,
    asc,
  });

  useEffect(() => {
    if (getActiveSubscriptionQuery.isSuccess) {
      setActiveSubscriptions(
        getActiveSubscriptionQuery.data as PrismSubscription[],
      );
    }
  }, [getActiveSubscriptionQuery.isSuccess, getActiveSubscriptionQuery.data]);

  if (getSubscriptionQuery.isLoading || getActiveSubscriptionQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (getSubscriptionQuery.isError) {
    return (
      <p>Error loading subscription: {getSubscriptionQuery.error.message}</p>
    );
  }

  if (getActiveSubscriptionQuery.isError) {
    return (
      <p>
        Error loading active subscriptions:{' '}
        {getActiveSubscriptionQuery.error.message}
      </p>
    );
  }

  const subscriptionData = getSubscriptionQuery.data;
  const subscriptionList = subscriptionData
    ? Array.isArray(subscriptionData)
      ? subscriptionData
      : [subscriptionData]
    : [];

  if (getSubscriptionQuery.isError) {
    return (
      <div>
        <h1>Subscription Operations</h1>
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
        {/* Active Subscriptions Section */}
        <div>
          <h2>Active Subscriptions</h2>
          <button onClick={() => getActiveSubscriptionQuery.refetch()}>
            Fetch Active Subscriptions
          </button>
          <ul>
            {activeSubscriptions &&
              activeSubscriptions.map((sub) => (
                <li key={sub.id}>
                  {sub.id} {/* Render other subscription fields as necessary */}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }

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
