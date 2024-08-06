//HOW TO STYLE REACT COMPONENTS WITH CSS
//.....................................
// (not including external framework or preprocessor)

// 1. EXTERNAL
// 2. MODULES
// 3. INLINE

import Student from './Student.jsx'


function App() {
  return(
    <>
    <Student name = "SpongeBobb" age= {3} isStudent = {true}/>
    <Student name = "Patric" age= {40} isStudent = {false}/>
    <Student name = "Sandy" age= {20} isStudent = {true}/>
    <Student age = {15}/>
    </>

  );
}


export default App
