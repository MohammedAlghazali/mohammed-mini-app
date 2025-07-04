import { type FC, useMemo } from "react";

import {
  initDataRaw as _initDataRaw,
  initDataState as _initDataState,
  useSignal,
} from "@telegram-apps/sdk-react";

// import { Link } from '@/components/Link/Link.tsx';
import { Page } from "@/components/Page.tsx";
// import { DisplayData, type DisplayDataRow } from '@/components/DisplayData/DisplayData.tsx';

// import tonSvg from './ton.svg';

// function getUserRows(user: User): DisplayDataRow[] {
//   return Object.entries(user).map(([title, value]) => ({ title, value }));
// }

export const IndexPage: FC = () => {
  const initDataState = useSignal(_initDataState);

  // const userRows = useMemo<DisplayDataRow[] | undefined>(() => {
  //   return initDataState && initDataState.user
  //     ? getUserRows(initDataState.user)
  //     : undefined;
  // }, [initDataState]);

  const userId = useMemo(() => {
    return initDataState?.user?.id ? String(initDataState.user.id) : undefined;
  }, [initDataState]);

  return (
    <Page back={false}>
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        {true ? (
          <>
            <iframe
              src="https://sharing.clickup.com/14288173/l/h/dm19d-9474/dfafee9a0e06c10"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              allowFullScreen
            ></iframe>
          </>
        ) : (
          <>
            You are not have access to the dashboard. Current User ID: {userId}
          </>
        )}
      </div>
      {/* <List>
        <Section
          header="Features"
          footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
        >
          <iframe
            src="https://sharing.clickup.com/14288173/l/h/dm19d-9474/dfafee9a0e06c10"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allowFullScreen
          ></iframe>
          <Link to="/ton-connect">
            <Cell
              before={<Image src={tonSvg} style={{ backgroundColor: '#007AFF' }}/>}
              subtitle="Connect your TON wallet"
            >
              TON Connect
            </Cell>
          </Link>
        </Section>
        <Section
          header="Application Launch Data"
          footer="These pages help developer to learn more about current launch information"
        >
          <Link to="/init-data">
            <Cell subtitle="User data, chat information, technical data">Init Data</Cell>
          </Link>
          <Link to="/launch-params">
            <Cell subtitle="Platform identifier, Mini Apps version, etc.">Launch Parameters</Cell>
          </Link>
          <Link to="/theme-params">
            <Cell subtitle="Telegram application palette information">Theme Parameters</Cell>
          </Link>
        </Section>
      </List> */}
    </Page>
  );
};
