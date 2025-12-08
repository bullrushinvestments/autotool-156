import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface BusinessSpecification {
  id: number;
  name: string;
  description: string;
  features: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpecification>({
    id: 0,
    name: '',
    description: '',
    features: []
  });
  const [loading, setLoading] isLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<BusinessSpecification>('/api/business-specification');
        setSpecification(response.data);
      } catch (err) {
        setError('Failed to load business specification data.');
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSpecification({
      ...specification,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      await axios.post('/api/business-specification', specification);
      setError(null); // Clear any previous error
    } catch (err) {
      setError('Failed to create or update business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={clsx('p-4', isMobile ? 'max-w-sm mx-auto' : 'max-w-screen-lg mx-auto')}>
      {loading && <div>Loading...</div>}
      {error && <div role="alert" aria-live="assertive">{error}</div>}
      {!loading && !error && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={specification.name}
            onChange={handleInputChange}
            className={clsx('block w-full p-2 border rounded', isMobile ? 'mb-4' : 'mr-2 mb-2')}
            required
          />
          
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={specification.description}
            onChange={handleInputChange}
            className={clsx('block w-full p-2 border rounded', isMobile ? 'mb-4' : 'mr-2 mb-2')}
            required
          />

          <label htmlFor="features">Features</label>
          <input
            type="text"
            id="features"
            name="features"
            value={specification.features.join(', ')}
            onChange={(e) => setSpecification({ ...specification, features: e.target.value.split(',') })}
            className={clsx('block w-full p-2 border rounded', isMobile ? 'mb-4' : 'mr-2 mb-2')}
          />

          <button type="submit" disabled={loading} className={clsx('bg-blue-500 text-white py-2 px-4 rounded', isMobile ? 'w-full' : '')}>
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface BusinessSpecification {
  id: number;
  name: string;
  description: string;
  features: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpecification>({
    id: 0,
    name: '',
    description: '',
    features: []
  });
  const [loading, setLoading] isLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<BusinessSpecification>('/api/business-specification');
        setSpecification(response.data);
      } catch (err) {
        setError('Failed to load business specification data.');
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSpecification({
      ...specification,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      await axios.post('/api/business-specification', specification);
      setError(null); // Clear any previous error
    } catch (err) {
      setError('Failed to create or update business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={clsx('p-4', isMobile ? 'max-w-sm mx-auto' : 'max-w-screen-lg mx-auto')}>
      {loading && <div>Loading...</div>}
      {error && <div role="alert" aria-live="assertive">{error}</div>}
      {!loading && !error && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={specification.name}
            onChange={handleInputChange}
            className={clsx('block w-full p-2 border rounded', isMobile ? 'mb-4' : 'mr-2 mb-2')}
            required
          />
          
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={specification.description}
            onChange={handleInputChange}
            className={clsx('block w-full p-2 border rounded', isMobile ? 'mb-4' : 'mr-2 mb-2')}
            required
          />

          <label htmlFor="features">Features</label>
          <input
            type="text"
            id="features"
            name="features"
            value={specification.features.join(', ')}
            onChange={(e) => setSpecification({ ...specification, features: e.target.value.split(',') })}
            className={clsx('block w-full p-2 border rounded', isMobile ? 'mb-4' : 'mr-2 mb-2')}
          />

          <button type="submit" disabled={loading} className={clsx('bg-blue-500 text-white py-2 px-4 rounded', isMobile ? 'w-full' : '')}>
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;