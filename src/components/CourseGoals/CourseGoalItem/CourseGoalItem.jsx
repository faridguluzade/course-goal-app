import React from "react";

import { GoalItem } from "./CourseGoalItem.style.js";

const CourseGoalItem = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <GoalItem className="goal-item" onClick={deleteHandler}>
      {props.children}
    </GoalItem>
  );
};

export default CourseGoalItem;
