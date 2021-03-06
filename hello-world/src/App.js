import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import User from './components/User';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';


function App() {

  return (
    <div className="App">
      <UserProvider value='Sundar'>
      <ComponentC/>
      </UserProvider>
      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}

      {/* // <ClickCounter name='Sundar'/>
    // <HoverCounter/>
    // <User render={(isLoggedIn)=>isLoggedIn? 'Sundar' : 'Guest'}/> */}

      {/* <ErrorBoundary>
    <Hero heroName='Batman'/>
    </ErrorBoundary>
    <ErrorBoundary>
    <Hero heroName='Super Man' />
    </ErrorBoundary>
    <ErrorBoundary>
    <Hero heroName='joker' />
    </ErrorBoundary>     */}
      {/* <PortalDemo/> */}
      {/* <RefsDemo/> */}
      {/* <ParentComp/> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifeCycleA/> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error </h1> */}
      {/* <h1 className={styles.success}>Success </h1> */}
      {/* <Inline />   */}
      {/* {<Stylesheet primary={true}/>} */}
      {/* {<NameList/>} */}
      {/* {<UserGreetings/>} */}
      {/*<ParentComponent/>*/}
      { /* <Greet name='Sundar'>
     <p>This is Child Tags</p>
   </Greet>
   <Greet name ='Viji'>
     <button>Action</button>
   </Greet>
   <Greet name='Jai'/>
   <Welcome name='Sundar'>
     </Welcome> 
     <Welcome name='Viji'>
     </Welcome> 
     <Welcome name='Jai'>
     </Welcome> 
     <Hello/>
  <Message></Message>  */ }
    </div>
  );
}

export default App;
