import Box010Header from './Box010Header';

interface IProps<T = string> {
  title: T;
}

export default {
  title: 'BOX/BOX010HEADER',
  component: Box010Header,
};

export const Default = () => <Box010Header />;
