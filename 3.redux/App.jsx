import React, { memo, useCallback } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { logIn } from "./actions/user";
const App = memo(() => {
  const user = useSelector((state) => state.user.data)
  console.log('user 입니다 : ',user)
  const dispatch = useDispatch();
 
  const onClickBtn = useCallback(() => {
    dispatch(logIn({
        id: 1,
        password: 124,
    }))
  }, [])
  return(
    <div>
      {user ? <div>{user.nickname}</div> : '로그인해주세요'}
      <button onClick={onClickBtn}>lonin</button>
    </div>

  )
})
export default App