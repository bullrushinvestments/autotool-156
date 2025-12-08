import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface Requirement {
  name: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

interface GatherRequirementsFormProps {
  onSubmit: (data: Requirement) => void;
}

const GatherRequirementsForm: React.FC<GatherRequirementsFormProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Requirement>();

  const handleFormSubmit: SubmitHandler<Requirement> = (data) => {
    setLoading(true);
    setTimeout(() => {
      onSubmit(data);
      reset();
      setLoading(false);
    }, 500);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Requirement Name
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className={twMerge(
            "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            errors.name && 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
          )}
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          {...register('description', { required: 'Description is required' })}
          rows={4}
          className={twMerge(
            "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            errors.description && 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
          )}
        />
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
          Priority
        </label>
        <select
          id="priority"
          {...register('priority', { required: 'Priority is required' })}
          aria-label="Select priority level"
          className={twMerge(
            "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            errors.priority && 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
          )}
        >
          <option value="">Select priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      {loading ? (
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled
        >
          <span className="spinner-border spinner-border-sm align-middle mr-2" role="status"></span>
          Loading...
        </button>
      ) : (
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      )}
    </form>
  );
};

export default GatherRequirementsForm;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface Requirement {
  name: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

interface GatherRequirementsFormProps {
  onSubmit: (data: Requirement) => void;
}

const GatherRequirementsForm: React.FC<GatherRequirementsFormProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Requirement>();

  const handleFormSubmit: SubmitHandler<Requirement> = (data) => {
    setLoading(true);
    setTimeout(() => {
      onSubmit(data);
      reset();
      setLoading(false);
    }, 500);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Requirement Name
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className={twMerge(
            "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            errors.name && 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
          )}
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          {...register('description', { required: 'Description is required' })}
          rows={4}
          className={twMerge(
            "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            errors.description && 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
          )}
        />
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
          Priority
        </label>
        <select
          id="priority"
          {...register('priority', { required: 'Priority is required' })}
          aria-label="Select priority level"
          className={twMerge(
            "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            errors.priority && 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
          )}
        >
          <option value="">Select priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      {loading ? (
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled
        >
          <span className="spinner-border spinner-border-sm align-middle mr-2" role="status"></span>
          Loading...
        </button>
      ) : (
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      )}
    </form>
  );
};

export default GatherRequirementsForm;