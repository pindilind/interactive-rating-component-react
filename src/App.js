
import './App.css';
import ActionButtons from './components/buttons.js';
import Button from '@mui/material/Button';

function App() {

  return (
  
        <div class="qrDiv">
      
          <div class="textDiv">
            
            <div class="qrDivTextOne">
              How did we do?
            </div>

            <div class="qrDivTextTwo">
            Please let us know how we did with your support request. Allfeedback is appreciated to help us improve our offering!
            </div>
            <ActionButtons/>
            <Button variant="contained">Contained</Button>
          </div>

        </div>

      
  
  );
}

export default App;
