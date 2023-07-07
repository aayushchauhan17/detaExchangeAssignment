let defaultState = {
  members: [],
  showMembers: [],
  selectedFilter: {},
};

let memberReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_MEMBER": {
      let newState = state;
      newState = {
        ...newState,
        showMembers: [...newState.members, action.payload],
      };

      newState = {
        ...newState,
        members: newState.showMembers,
      };

      return newState;
    }
    case "DELETE_MEMBER": {
      let newState = state;
      newState = {
        ...newState,
        showMembers: newState.members?.filter((arr) => {
          if (
            arr.name !== action.payload.name &&
            arr.company !== action.payload.company
          )
            return arr;
        }),
      };

      newState = {
        ...newState,
        members: newState.showMembers,
      };

      return newState;
    }
    case "APPLY_FILTER": {
      let newState = state;
      newState = {
        ...newState,
        selectedFilter: action.payload,
        showMembers: newState.members?.filter((arr) => {
          if (action.payload[arr.company]) {
            return arr;
          }
        }),
      };
      return newState;
    }

    case "SORT_MEMBERS": {
      let newState = state;
      if (action.payload === "All") {
        newState = { ...newState, showMembers: newState.members };
      } else if (action.payload === "Active") {
        newState = {
          ...newState,
          showMembers: newState.members?.filter((arr) => {
            if (arr.status === "Active") return arr;
          }),
        };
      } else {
        newState = {
          ...newState,
          showMembers: newState.members?.filter((arr) => {
            if (arr.status === "Close") return arr;
          }),
        };
      }
      return newState;
    }

    case "GET_DATA": {
      let newState = state;

      if (action.payload?.length)
        newState = {
          ...newState,
          members: action.payload,
          showMembers: action.payload,
        };

      return newState;
    }

    default:
      return state;
  }
};

export default memberReducer;
