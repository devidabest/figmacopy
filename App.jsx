import MiddleComponent from './MiddleComponent';
import LeftComponent from './Left_component'; 


function App() {
  return (
    

    <div className="flex h-screen bg-gray-100">
   
      <LeftComponent /> 
      <div className="flex-grow">
        <MiddleComponent /> 
      </div>
    </div>
  );
}

export default App;
