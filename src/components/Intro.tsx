import { AdminComponent, EditorComponent, ViewerComponent } from "./dashboard";

const IntroComponent = ({ intro, name }: {intro: string, name?: string}) => {
  console.log("intro", intro);
  return (
    <div className="dashboard">
      <h1>{intro}</h1>
      {name ? <p>Welcome {name}!, nice to have you back</p> : <p>Welcome to the {intro}</p>}

      {intro.startsWith("Admin") && (
        <div>
          <AdminComponent />
        </div> 
      )}

      {intro.startsWith("Editor") && (
        <div>
          <EditorComponent />
        </div> 
      )}
      {intro.startsWith("Viewer") && (
        <div>
          <ViewerComponent />
        </div> 
      )}
    </div>
  );
};

export default IntroComponent