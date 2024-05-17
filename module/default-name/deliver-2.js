import * as deliver from './deliver-tools.js';

let User = deliver.default;

deliver.printDeliverInfo(new User(
    "XX도 OO시 OO로 OOO동 OOO호", ['뿌링클순살', '프라이']
));
