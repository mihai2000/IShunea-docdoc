import React from "react";

export default function Pagination() {
    return (<div className="Paging Hidden" data-url="http://www.docdoc.md/ro/service//Page/%%PAGE_NUMBER%%"
                 data-options="Action=Service"
                 data-current="1"
                 data-records="0"
                 data-limit="30">
            Pagina <span className="Current">1</span> din <span className="Total">1</span>
            <a href="http://www.docdoc.md/ro/service//Page/1" className="Button Previous Disabled"
               data-change="-1">&lsaquo;</a>
            <a href="http://www.docdoc.md/ro/service//Page/0" className="Button Next" data-change="1">&rsaquo;</a>
        </div>
    );
}
