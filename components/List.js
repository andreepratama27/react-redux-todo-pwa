import { Box, Checkbox, Label, Text } from "gestalt";
import styled from "styled-components";
import PropTypes from "prop-types";

// const Badges = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #292929;
//   font-size: 1.2rem;
//   width: 10rem;
//   border-radius: 0.4rem;
// `;

// const Option = styled.div`
//   display: flex;
// `;

// const Box = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 6rem;
//   font-size: 1.2rem;
//   border-radius: 0.4rem;

//   ${props =>
//     props.undo &&
//     `
//         margin-right: .4rem;
//         background-color: gold;
//     `}

//   ${props =>
//     props.delete &&
//     `
//         background-color: firebrick;
//         color: #fff;
//     `}
// `;

const List = props => {
  const { data, taskDone, deleteData } = props;

  return (
    <ul className="list-horizontal">
      {data.map((v, key) => (
        <li key={key}>
          <div className="text">{v.task}</div>
          <div className="option">
            {!v.done ? (
              <Badges onClick={e => taskDone(v.id)}>Done</Badges>
            ) : (
              <Option>
                <Box delete onClick={e => deleteData(key)}>
                  Delete
                </Box>
              </Option>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  taskDone: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired
};

export default List;
