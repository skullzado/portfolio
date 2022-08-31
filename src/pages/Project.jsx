import { Outlet } from 'react-router-dom';

export const Project = () => {
  document.title = 'skullzado - Projects';

  return (
    <div className="project-container">
      <Outlet />
    </div>
  );
};
