import { useEffect } from 'react';
import { EditorialsSection } from '../components/EditorialsSection';

export function EditorialsPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'Editorials — The Nepal Discourse';
    return () => {
      document.title = previous;
    };
  }, []);

  return <EditorialsSection />;
}
