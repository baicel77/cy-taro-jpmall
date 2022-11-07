import { memo, useEffect, useRef, useState } from "react";
import { WebView } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const WebViewPage = memo(() => {
  const currentInstance = useRef(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (!currentInstance.current) {
      currentInstance.current = Taro.getCurrentInstance();
    }
    // 拿到其它页面传递过来的url参数
    const params = currentInstance.current.router.params;
    // console.log("params=", params);
    setUrl(params.link);
  }, []);

  return <WebView className="webview" src={url} />;
});

export default WebViewPage;
