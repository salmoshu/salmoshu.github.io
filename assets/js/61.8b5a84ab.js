(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{468:function(t,a,s){"use strict";s.r(a);var r=s(34),_=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"imu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#imu"}},[t._v("#")]),t._v(" IMU")]),t._v(" "),s("ul",[s("li",[t._v("严老师的开发板没有用到磁力计，也没有对应的校准工具。")]),t._v(" "),s("li",[t._v("有人将PSINS用在了安卓平台上面，动态情形下效果比安卓好，静态情形下pitch和roll相差无异，就是yaw角也会存在偏移。（有平台没有经过校准就进行使用的，所以不确定是否存在对所有部分都进行自动校准的应用模块）")]),t._v(" "),s("li",[t._v("严老师在论坛的回复比较含糊，对于mems，算法不是主要误差源。（有一点需要注意，就是严老师的很多算法是基于光纤、激光陀螺仪，高精度陀螺仪可以不依靠磁力计得到yaw角）")])]),t._v(" "),s("h3",{attrs:{id:"基础知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础知识"}},[t._v("#")]),t._v(" 基础知识")]),t._v(" "),s("h4",{attrs:{id:"_1-基础知识介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-基础知识介绍"}},[t._v("#")]),t._v(" 1.基础知识介绍")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cxyzjd.com/article/QLeelq/112985306",target:"_blank",rel:"noopener noreferrer"}},[t._v("IMU原理、误差模型、标定、惯性传感器选型以及IMU产品调研"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_2-误差类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-误差类型"}},[t._v("#")]),t._v(" 2.误差类型")]),t._v(" "),s("table",{staticClass:"tg"},[s("thead",[s("tr",[s("td",{staticClass:"tg-9wq8",attrs:{rowspan:"13"}},[t._v("IMU主要误差源")]),t._v(" "),s("td",{staticClass:"tg-nrix",attrs:{rowspan:"8"}},[t._v("确定性误差")]),t._v(" "),s("td",{staticClass:"tg-baqh",attrs:{colspan:"2"}},[t._v("不正交误差")])]),t._v(" "),s("tr",[s("td",{staticClass:"tg-baqh",attrs:{colspan:"2"}},[t._v("零偏误差")])]),t._v(" "),s("tr",[s("td",{staticClass:"tg-nrix",attrs:{rowspan:"3"}},[t._v("轴失准角误差")]),t._v(" "),s("td",{staticClass:"tg-0lax"},[t._v("不对称性误差")])]),t._v(" "),s("tr",[s("td",{staticClass:"tg-0lax"},[t._v("预热零偏不稳定性")])]),t._v(" "),s("tr",[s("td",{staticClass:"tg-0lax"},[t._v("运行零偏不稳定性")])]),t._v(" "),s("tr",[s("td",{staticClass:"tg-baqh",attrs:{colspan:"2"}},[t._v("温度敏感漂移")])]),t._v(" "),s("tr",[s("td",{staticClass:"tg-nrix",attrs:{rowspan:"2"}},[t._v("刻度因素误差")]),t._v(" "),s("td",{staticClass:"tg-0lax"},[t._v("非线性误差")])]),t._v(" "),s("tr",[s("td",{staticClass:"tg-0lax"},[t._v("温度敏感误差")])]),t._v(" "),s("tr",[s("td",{staticClass:"tg-cly1",attrs:{rowspan:"5"}},[t._v("随机性误差")]),t._v(" "),s("td",{staticClass:"tg-baqh",attrs:{colspan:"2"}},[t._v("量化噪声")])]),t._v(" "),s("tr",[s("td",{staticClass:"tg-baqh",attrs:{colspan:"2"}},[t._v("角噪声游走")])]),t._v(" "),s("tr",[s("td",{staticClass:"tg-baqh",attrs:{colspan:"2"}},[t._v("速率随机游走")])]),t._v(" "),s("tr",[s("td",{staticClass:"tg-baqh",attrs:{colspan:"2"}},[t._v("速度斜坡")])]),t._v(" "),s("tr",[s("td",{staticClass:"tg-baqh",attrs:{colspan:"2"}},[t._v("偏置不稳定性")])])])]),t._v("\n参考链接：[IMU原理、误差模型、标定、惯性传感器选型以及IMU产品调研](https://www.cxyzjd.com/article/QLeelq/112985306)\n"),s("h4",{attrs:{id:"_3-imu校准"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-imu校准"}},[t._v("#")]),t._v(" 3.IMU校准")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/shenshikexmu/article/details/80013444",target:"_blank",rel:"noopener noreferrer"}},[t._v("IMU校正以及姿态融合"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/Dinvent/article/details/107536870",target:"_blank",rel:"noopener noreferrer"}},[t._v("mpu9250磁力计校准 mpl库数据校准"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"psins工具箱相关笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#psins工具箱相关笔记"}},[t._v("#")]),t._v(" PSINS工具箱相关笔记")]),t._v(" "),s("h4",{attrs:{id:"_1-姿态更新用于安卓平台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-姿态更新用于安卓平台"}},[t._v("#")]),t._v(" 1. 姿态更新用于安卓平台")]),t._v(" "),s("p",[t._v("参考链接：https://zhuanlan.zhihu.com/p/401588028")]),t._v(" "),s("p",[t._v("为了验证到底是Android系统自己解算的姿态好，还是使用PSINS算出来的好，该链接将工具箱代码导入到了安卓项目中，其结论如下：")]),t._v(" "),s("p",[t._v("动态情况下PSINS算法的结果更稳定些。静态是PSINS算法的水平姿态跳动较大是由于天向加计有较多的异常值，偏离1g有0.5~1g，每出现一次就会影响水平姿态结果，如果加入相应的处理情况会改善很多。")])])}),[],!1,null,null,null);a.default=_.exports}}]);