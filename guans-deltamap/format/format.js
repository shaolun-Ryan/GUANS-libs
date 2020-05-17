/* 
The function to format the originnal dataset into the format expected.
Hope to two different kinds of algo for it.
*/

/* 
@params Array arr

@return Object data
Array nodes,
Array links
*/
import * as d3 from 'd3'

let varia = (arr) => {

    /* **************Begin to build structure data******************** */
    let dataOrigin = {
        axisnode: [],
        link:[]
    }


    /* 按对象的排布顺序找出name,start和end字段 */
    let [name,start,end] = Object.keys(arr[0])
    let attributes = Object.keys(arr[0]).splice(3)
    /* Every data is process into four variables:
    name
    start
    end
    attributes
    */

    /* 求出始末值分布的最大和最小区间 , 是解构语法*/
    let [min,max] = getExtent(link);

    dataOrigin.axisnode = d3.range(min,max+1)
    dataOrigin.link = arr.map((d,i)=>{
        return {
            name: d[name],
            start: d[start],
            end: d[end]
        }
    })

    /* 给link数组添加 附加属性*/
    arr.forEach((d,i)=>{
        attributes.forEach(_attribute=>{
            dataOrigin.link[i][_attribute] = d[_attribute]
        })
    })
    //check out the build of original dataset
    if(dataOrigin.axisnode.length!=0&&dataOrigin.link.length!=0){
        console.log('Build structure data successfully.',dataOrigin)
    }

/* **************Begin to build output data******************** */

    let dataOutput = {};
    dataOutput.axisnodePos = [];
    dataOutput.axisnodeNeg = [];
    dataOutput.link = [];

    //定义环形的映射比例尺
    let angle = d3.scaleLinear()
    .domain([max,min])
    .range([0, Math.PI])

    dataOutput.axisnodePos = dataOrigin.axisnode.map((d, i)=>{
        return {
            uid: i,
            tick: d,
            angle: angle(d)
        }
    })

    dataOutput.axisnodeNeg = dataOrigin.axisnode.map((d, i)=>{
        return {
            uid: i,
            tick: d,
            angle: -angle(d)
        }
    })

    let fromArray = [], toArray = []
    dataOutput.link = dataOrigin.link.map((d, i)=>{
        let from = d[start], to = d[end]


        let fromArrayEle = dataOutput.axisnodePos.findIndex((item)=>{
            return item.tick == from
        })
        fromArray.push(fromArrayEle)

        let toArrayEle = dataOutput.axisnodePos.findIndex((item)=>{
            return item.tick == to
        })
        toArray.push(toArrayEle)

        return {
            uid: i,
            name: d[name],
            fromId: fromArray[i],
            toId: toArray[i],
            from: d[start],
            to: d[end],
            delta: d[end] - d[start]
        }
    })

    /* 给link数组添加 附加属性*/
    arr.forEach((d,i)=>{
        attributes.forEach(_attribute=>{
            dataOutput.link[i][_attribute] = d[_attribute]
        })
    })

    //check out the build of original dataset
    if(dataOutput.axisnodePos.length!=0&&dataOutput.link.length!=0){
        console.log('Build output data successfully.',dataOutput)
    }

    return dataOutput;
}

let getFields = (arr)=>{
    const [name,start,end] = Object.keys(arr[0])
    const attributes = Object.keys(arr[0]).splice(3)
    return [name,start,end].concat(attributes)
}

let getMainFields = (arr)=>{
    const [name,start,end] = Object.keys(arr[0])
    return [name,start,end];
}

let getAddFields = (arr)=>{
    return Object.keys(arr[0]).splice(3);
    
}

let getExtent = (arr)=>{
    /* 按对象的排布顺序找出name,start和end字段 */
    let [name,start,end] = Object.keys(arr[0])
    let attributes = Object.keys(arr[0]).splice(3)
    
    /* 求出始末值分布的最大和最小区间 , 是解构语法*/
    let [min,max] = d3.extent(arr.reduce((prev,cur)=>{
        prev.push(cur[start], cur[end])
        return prev
    },[]))

    return [min,max];
}

export {
    varia,
    getFields,
    getMainFields,
    getAddFields,
    getExtent
}