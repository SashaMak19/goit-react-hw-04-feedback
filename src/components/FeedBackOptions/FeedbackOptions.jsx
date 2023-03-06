import PropTypes from 'prop-types';
import { SetButton, Btn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
  return (
    <SetButton>
      {options.map((_, index) => (
        <Btn key={index} type="button" onClick={onLeaveFeedBack}>
          {index === 0 && 'Good'}
          {index === 1 && 'Neutral'}
          {index === 2 && 'Bad'}
        </Btn>
      ))}
    </SetButton>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedBack: PropTypes.func.isRequired,
};

export { FeedbackOptions };
