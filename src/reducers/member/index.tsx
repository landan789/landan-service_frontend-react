// The state here means the proprty 'members' of main store, it doesn't mean the main store
// beacause we use the recuderCombiner
const member = (state = [], action: any) => {
    let members = action.members;
    let memberState = state;
    switch (action.type) {
        case 'MEMBER_SHOW':
            return members;
        case 'MEMBER_SAVE':
            let member = members.shift();
            return [...memberState, member];
        default:
            return memberState;
    }
};

export default member;