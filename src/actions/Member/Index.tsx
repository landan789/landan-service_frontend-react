// This function is a real action
const _show = (members: any) => {
  return {
    type: 'MEMBER_SHOW',
    members: members
  };
};

// This function is a real action
const _save = (members: any) => {
  return {
    type: 'MEMBER_SAVE',
    members: members
  };
};

// The methods of this class are a wrapped actions
// show, save, edit, remove
class Member {
  show() {
    return (dispatch: any) => {
      return window.fetch('http://fea.jkpot.com:3002/api/member', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'text/plain'
        },
        cache: 'no-cache',
        mode: 'cors',
        credentials: 'include'
      }).then((res) => {
        return res.json();
      }).then((resJson) => {
        let members = resJson.data;
        dispatch(_show(members));
      });
    };
  }

  save(members: any) {
    return (dispatch: any) => {
      let member = members.shift();
      return window.fetch('http://fea.jkpot.com:3002/api/member', {
        method: 'POST',
        body: JSON.stringify({
          ...member
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        return res.json();
      }).then((resJson) => {
        let members = resJson.data;
        dispatch(_save(members));
      });
    };
  }
}

export default new Member();