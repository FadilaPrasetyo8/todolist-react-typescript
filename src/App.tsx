import Todolist from "./pages/TodoList";
import { IAppProps } from "./interfaces";

const App: React.FC<IAppProps> = () => {
  return (
    <>
      <Todolist />
    </>
  );
};

export default App;
