'use client'
import CentreUpslider from "@/components/page";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <CentreUpslider/>
      <Script
        src="https://www.feedinbox.com/widget.js"
        strategy="lazyOnload"
      />
      <Script id="feedinbox-config">
        {`
          window.feedinboxConfig = {
            projectKey: "cmj0stzxh000cnruladng1ptx"
          };
        `}
      </Script> 
    </div>
  );
}
