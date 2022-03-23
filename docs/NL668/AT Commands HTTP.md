﻿﻿﻿# FIBOCOM NL668 AT Commands User Manual HTTP
Version: V1.2.3 Date: 2020-03-11 

### **Copyright** 

Copyright ©2020 Fibocom Wireless Inc . All rights reserved. 

Without the prior written permission of the copyright holder, any company or individual is prohibited to excerpt, copy any part of or the entire document, or transmit the document in any form. 

### **Attention** 

The document is subject to update from time to time owing to the product version upgrade or other reasons. Unless otherwise specified, the document only serves as the user guide. All the statements, information  and  suggestions  contained  in  the  document  do  not  constitute  any  explicit  or  implicit guarantee. 

### **Trademark** 

The trademark is registered and owned by Fibocom Wireless Inc. 

### **Versions**

|**Version** |**Date** |**Remarks** |
| - | - | - |
|V1.0.0 |2016-12-05 |Initial version |
|V1.0.1 |2017-03-09 |Declare that https is not support; Delete ERR\_CODE chapter; |
|V1.0.2 |2017-08-22 |Change to new template |
|V1.0.3 |2018-04-21 |Add NL668 serial |
|V1.0.4 |2018-11-13 |Add NL668-AM serial and NL668-EU serial |
|V1.0.5 |2018-12-04 |Add +HTTPHEAD command |
|V1.0.6 |2018-12-15 |Modify +HTTPSET cmommad |
|V1.0.7 |2018-12-26 |Add AT example |
|V1.0.8 |2019-04-17 |List all the specific application types |
|V1.2.1 |2019-05-30 |Add Note for +HTTPREAD command |
|V1.2.2 |2019-10-14 |Add NL668-CN-10 |
|V1.2.3 |2020-03-11 |Add NL668-CN-05 |

### **Applicability Type**

|**No.**|**Type**|**Note**|
| - | - | - |
|1 |NL668-CN-00/01/02/03/04/10/05 |NA |
|2 |NL668-EAU-00 |NA |
|3 |NL668-EU-00/01/03 |NA |
|4 |NL668-AM-00/01 |NA |
|5 |NL668-JP-00/01 |NA |
|6 |NL668-LA-00 |NA |
|7 |NL661-EU-00 |NA |


## **Contents**

[**1  HTTP Commands** ](#1--http-commands)

1. [+HTTPSET, Set HTTP or HTTPS parameters](#)
2. [+HTTPDATA, send POST data to modem](#_page6_x52.00_y132.04)
3. [+HTTPACT, start HTTP or HTTPS service](#_page7_x81.00_y72.04)
4. [+HTTPREAD, Read data](#_page8_x81.00_y152.04)
5. [+HTTPHEAD, Set HTTP or HTTPS header parameters](#_page9_x81.00_y256.04)

[**2  HTTP(S) Example**](#_page11_x52.00_y72.04)
1. [+HTTPSET ](#_page11_x81.00_y100.04)
1. [+HTTPDATA](#_page11_x81.00_y417.04)
1. [+HTTPACT](#_page11_x81.00_y555.04)
1. [+HTTPREAD](#_page12_x81.00_y292.04)
2. [+HTTPHEAD](#_page14_x81.00_y252.04)


# **1.  HTTP Commands**
## **1.1 +HTTPSET, Set HTTP or HTTPS parameters**
### **1.1.1 Description**

This command is used to set service type of HTTP or HTTPS. 

### **1.1.2. Syntax**

|**Command** |**Response** |
| - | - |
|+HTTPSET=<"httpParam">,<"httpParamValue"> |OK <br />or:  ERROR|
|+HTTPSET? |+HTTPSET: "httpParam","httpParamValue"<br />+HTTPSET: "httpParam","httpParamValue"<br /> … <br />OK|
|+HTTPSET=? |+HTTPSET: (<"httpParam">),(<"httpParamValue">) OK |

### **1.1.3. Attributes**

|**Pin Restricted** |**Persistent** |**Sync Mode** |**Effect Immediately** |**Time of duration** |
| - | - | - | - | - |
|Yes |Yes |Yes |Yes |- 1s |

### **1.1.4. Defined Values**

|**httpParam** |**httpParamValue** |
| - | - |
|URL |http server address，character string type，string length is 0-255, the string format must be any kind of the following：<br />For HTTP <br />[http://host/path:port ](http://host/path:port)e.g.http://news.sohu.com/20131010/n387881216.shtml:80 <br />host/path:port       e.g.  news.sohu.com/20131010/n387881216.shtml:80<br />http://host/path   e.g.http://news.sohu.com/20131010/n387881216.shtml <br />For HTTPS <br />https://host:port    e.g. https:// www.googleapis.com:443 <br />https://hoste.g. https:// www.googleapis.com <br />Notes：<br />Host  ---  http or https host name or host IP address <br />Path  ---  the file path requested by http or https <br />Port  --- http or https port , optional setting. The default number for http is 80, and 443 for https.<br />Note:<br />No matter http or https, it requires the port in the end of URL string.|
|UAGENT |User-Agent Value, character string type, optional settings. |
|CONTYPE |Content-Type Value, character string type, optional settings. |
|ACCEPT |Accept Value, character string type, optional settings. |
|RESPONSEHEADER|Response Header Value, character string type, optional settings, the default value is "0", it means HTTP head information is showed in AT+HTTPREAD output. |
|MODE |Read mode Value, character string type, optional settings, the default value is "0".<br />When the value is "1", the received data will be sent to UART since connection built up. AT+HTTPREAD execution can read continuous data until the end of receiving.|
|REDIR |Redirect Value, character string type, option settings, the default value is "0". When the value is "1", and the module receives 3XX or 500 and other return codes from server, it will redirect to the new URL automatically. |
|RANGE |Content-Range value, character string type, optional settings, the default value is NULL. Enter each time you use it in accordance with the protocol standard format, such as "bytes=0-12". Receives 206 for success. Overwrite the last record each time it is used. If you don't want to use RANGE, you can assign it to NULL. Post does not apply.|

The document is subject to update from time to time owing to the product version upgrade or other reasons. Unless otherwise specified, the document only serves as the user guide. All the statements, information  and  suggestions  contained  in  the  document  do  not  constitute  any  explicit  or  implicit guarantee. 
**⚠ Note :** 

> The value of &lt;httpParam> is only support capital letter. 

## **1.2 +HTTPDATA, send POST data to modem**

### **1.2.1 Description**

This command is used to send data to the module via UART for HTTPPOST procedure. 

### **1.2.2. Syntax**

| **Command**          | **Response**                                 |
| -------------------- | -------------------------------------------- |
| +HTTPDATA= &lt;length> | ><br />……<br />OK<br />or:  ERROR            |
| +HTTPDATA?           | OK                                           |
| +HTTPDATA=?          | +HTTPDATA: (list of supported &lt;length>s) OK |

### **1.2.3. Attributes**

| **Pin Restricted** | **Persistent** | **Sync Mode** | **Effect Immediately** | **Time of duration** |
| ------------------ | -------------- | ------------- | ---------------------- | -------------------- |
| Yes                | No             | No            | Yes                    | - 1s                 |

### **1.2.4. Defined Values**

&lt;length>: integer type;length of the data will be input. Range 1-64000 byte. 

**⚠ Note** :  

When the received data length reaches to the given size, the module exits from data mode and responses OK. 

The time out of data input is 30 seconds, then the module exits from data mode and response ERROR

## **1.3 +HTTPACT, start HTTP or HTTPS service**

## **1.3.1 Description** 

This command used to start HTTP or HTTPS connect (GET or POST)

| **Command**                    | **Response**                                                 |
| ------------------------------ | ------------------------------------------------------------ |
| +HTTPACT=&lt;mode>[,&lt;timernum>] | OK <br />or:<br />ERROR:                                     |
| +HTTPACT?                      | OK                                                           |
| +HTTPACT=?                     | +HTTPACT: (list of supported &lt;mode>s) [, list of supported &lt;timernum>s] <br />OK |
| URC                            | +HTTP: &lt;status> <br />+HTTPS: &lt;status>  |
| URC                            | +HTTPRES: &lt;mode>,&lt;reply>,&lt;length> |
