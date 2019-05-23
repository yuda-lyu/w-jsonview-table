# w-jsonview-table
A wrapper for json.human.js.

![language](https://img.shields.io/badge/language-JavaScript-orange.svg) [![npm version](http://img.shields.io/npm/v/w-jsonview-table.svg?style=flat)](https://npmjs.org/package/w-jsonview-table) [![Build Status](https://travis-ci.org/yuda-lyu/w-jsonview-table.svg?branch=master)](https://travis-ci.org/yuda-lyu/w-jsonview-table) [![license](https://img.shields.io/npm/l/w-jsonview-table.svg?style=flat)](https://npmjs.org/package/w-jsonview-table) [![npm download](https://img.shields.io/npm/dt/w-jsonview-table.svg)](https://npmjs.org/package/w-jsonview-table) [![jsdelivr download](https://data.jsdelivr.com/v1/package/npm/w-jsonview-table/badge)](https://www.jsdelivr.com/package/npm/w-jsonview-table)

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-jsonview-table/global.html).

## Example
To view some examples for more understanding, visit examples:
> **small data:** [ex-small.html](https://yuda-lyu.github.io/w-jsonview-table/examples/ex-small.html) [[source code](https://github.com/yuda-lyu/w-jsonview-table/blob/master/docs/examples/ex-small.html)]

> **large data:** [ex-large.html](https://yuda-lyu.github.io/w-jsonview-table/examples/ex-large.html) [[source code](https://github.com/yuda-lyu/w-jsonview-table/blob/master/docs/examples/ex-large.html)]

## Installation
### Using npm(ES6 module):
> **Note:** w-jsonview-table does't depend on any package.
```alias
npm i w-jsonview-table
```
By import:
```alias
import jv from 'w-jsonview-table'

let data={a1:123,b1:'xyz',c1:[1.2,3.4,'5.6',false],d1:{cid:'WK2WHS',name:'peter',unique:false}}
let ele=document.querySelector('#id')

jv(data, element, {expanded:true})
```

### In a browser(UMD module):
Add script for w-jsonview-table.
```alias
<script src="https://cdn.jsdelivr.net/npm/w-jsonview-table@1.0.0/dist/w-jsonview-table.umd.js"></script>
```
Directly use:
```alias
let jv=window['w-jsonview-table']

let data={a1:123,b1:'xyz',c1:[1.2,3.4,'5.6',false],d1:{cid:'WK2WHS',name:'peter',unique:false}}
let ele=document.querySelector('#id')

jv(data, element, {expanded:true})
```
