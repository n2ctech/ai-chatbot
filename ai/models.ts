// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'anthropic.claude-3-5-sonnet-20240620-v1:0',
    label: 'Claude 3.5 Sonnet',
    apiIdentifier: 'anthropic.claude-3-5-sonnet-20240620-v1:0',
    description: 'Great model',
  },
] as const;

export const DEFAULT_MODEL_NAME: string =
  'anthropic.claude-3-5-sonnet-20240620-v1:0';
