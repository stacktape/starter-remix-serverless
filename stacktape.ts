import { RemixWeb, defineConfig } from 'stacktape';

export default defineConfig(() => {
  const web = new RemixWeb({
    appDirectory: './'
  });

  return {
    resources: { web }
  };
});
