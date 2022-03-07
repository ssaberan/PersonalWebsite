import React from "react";
import { Helmet } from "react-helmet";
import { useAsync } from "react-async";

import { fetchResume } from "../../Utilities/FetchResume";

const Resume = () => {
   const { data } = useAsync({
      promiseFn: fetchResume,
   });
   console.log(data?.resume);
   return (
      <>
         <Helmet>
            <title>Resume</title>
         </Helmet>
         <div dangerouslySetInnerHTML={{ __html: data?.resume }} tabIndex={0} />
      </>
   );
};

export default Resume;
