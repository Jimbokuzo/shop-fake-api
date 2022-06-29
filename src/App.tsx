import { ResetStyles } from "./features/global";
import { HeaderFeature, FooterFeature, PageFeature } from "./features";
import { AppRouter } from "./common/components";

function App() {
  return (
    <div>
      <ResetStyles />
      <HeaderFeature />
      <PageFeature>
        <AppRouter />
      </PageFeature>
      <FooterFeature />
    </div>
  );
}

export default App;
