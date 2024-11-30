import { useLocation } from 'react-router-dom';
import { BreadcrumbItems } from '../App';

function BreadcrumbNav() {
  const location = useLocation();

  const currentBreadcrumb = BreadcrumbItems.find(
    (item) => item.path === location.pathname
  );

  return (
    <div>
      {currentBreadcrumb ? (
        <span> Home / {currentBreadcrumb.label}</span>
      ) : (
        <span> Home / 404 Error</span>
      )}
    </div>
  );
}
export default BreadcrumbNav;
