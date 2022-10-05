import React, { memo, useCallback } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { logIn, logOut } from "./actions/user";
const App = memo(() => {
  const user = useSelector((state) => state.user)
  console.log('user 입니다 : ',user)
  const dispatch = useDispatch();
 
  const onClickBtn = useCallback(() => {
    dispatch(logIn({
        id: 1,
        password: 124,
    }))
  }, [])
  
  const onLogout = useCallback(() => {
    dispatch(logOut());
  })
  return(
    <div>
      {user.isLoggedIn 
      ? <div>로그인 중</div> 
      : user.data
      ? <div>{user.data.nickname}</div> 
    : '로그인해주세요  '}
      { !user.data 
      ? <button onClick={onClickBtn}>lonin</button>
      : <button onClick={onLogout}>logout</button>
      }
    </div>

  )
})
export default App