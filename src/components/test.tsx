import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { TestInput } from './types/TestTypes';
import { LoadingButton } from './components/UI/LoadingButton';

interface WriteTestFormProps {
  onSubmit: (testData: TestInput) => void;
}

const WriteTests: React.FC<WriteTestFormProps> = ({ onSubmit }) => {
  const [createTest] = useMutation(CREATE_TEST, {
    update(cache, { data }) {
      cache.writeQuery({ query: GET_TESTS });
    },
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestInput>();

  const handleFormSubmit = async (data: TestInput) => {
    try {
      await createTest({
        variables: { input: data }
      });
      onSubmit(data);
      reset();
    } catch (error) {
      console.error('Failed to create test:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4">
      <div>
        <label htmlFor="title" className="block mb-1">Title</label>
        <input {...register("title", { required: true })} id="title" type="text" placeholder="Enter test title..." className="border p-2 rounded w-full" aria-label="Test Title Input"/>
      </div>

      <div>
        <label htmlFor="description" className="block mb-1">Description</label>
        <textarea {...register("description", { required: true })} id="description" placeholder="Enter test description..." className="border p-2 rounded w-full h-40 resize-y" aria-label="Test Description Input"/>
      </div>

      <LoadingButton type="submit" isLoading={false} className="mt-3">Create Test</LoadingButton>
    </form>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { TestInput } from './types/TestTypes';
import { LoadingButton } from './components/UI/LoadingButton';

interface WriteTestFormProps {
  onSubmit: (testData: TestInput) => void;
}

const WriteTests: React.FC<WriteTestFormProps> = ({ onSubmit }) => {
  const [createTest] = useMutation(CREATE_TEST, {
    update(cache, { data }) {
      cache.writeQuery({ query: GET_TESTS });
    },
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestInput>();

  const handleFormSubmit = async (data: TestInput) => {
    try {
      await createTest({
        variables: { input: data }
      });
      onSubmit(data);
      reset();
    } catch (error) {
      console.error('Failed to create test:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4">
      <div>
        <label htmlFor="title" className="block mb-1">Title</label>
        <input {...register("title", { required: true })} id="title" type="text" placeholder="Enter test title..." className="border p-2 rounded w-full" aria-label="Test Title Input"/>
      </div>

      <div>
        <label htmlFor="description" className="block mb-1">Description</label>
        <textarea {...register("description", { required: true })} id="description" placeholder="Enter test description..." className="border p-2 rounded w-full h-40 resize-y" aria-label="Test Description Input"/>
      </div>

      <LoadingButton type="submit" isLoading={false} className="mt-3">Create Test</LoadingButton>
    </form>
  );
};

export default WriteTests;