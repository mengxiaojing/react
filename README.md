## react dome（响应式框架）

* 文件目录
    src:
      index整个项目的入口文件
      App则是app组件文件
      App.test是自动化测试文件
      serviceWorker是使上线之后用户断网之后依旧能正常访问页面的文件
    public:
      favicon是icon图片
      manifest是将Web应用程序安装到设备的主屏幕为用户提供更快的访问和更丰富的体验

# react知识点
  ## 定义组件可通过新建类去继承react.component
  ## ReactDOM.render可将组件挂载到某个节点上
  ## js文件中使用jsx语法则需引入react进行编译
  ## 只要一个组件引入css其他组件也会受到影响,若不想影响则使用styled-components模块
  ## 兼容ie8以上
# jsx语法
  ## 区别：js中使用字符串渲染html
          jsx中不需要字符串渲染
  ## jsx中使用自定义组件必须开头大写

# react
  ## render函数必须整体被包含在一个元素中若不想让此元素渲染出来可用react的Fragment组件进行替代
  ## render函数return的内容是jsx语法

# react的响应式思想以及事件绑定（入门重要知识点）
  ## constructor在js的类里面最优先执行的方法
  ## this.state组件的状态
  ## 改变this.state组件的值则是必须调用this.setState({值:新值})
     state新的修改赋值方法:
        this.setState((prevState) => {
          //必须return一个json
        },() => {//异步执行成功之后调用的函数
          
        })
        ps:该方法提高性能但是该方法是异步方法需再函数体外对值进行保存再进行操作，异步的好处是可以把多次的setState结合成一次setState减少虚拟DOM比对次数
  ## 操作state的时候immutable特性不允许对state做任何改变
  ## 绑定事件时该方法的this指向是undefined需使用bind(this)使this指向当前组件
     使用bind(this)时应在constructor初始化的时候可直接绑定有助于提高性能（可保证函数作用域只执行一次且避免子组件的无谓渲染）
  ## 绑定事件时该事件名称首字母大写
  ## jsx的注释
        多行注释
        {/*注释内容*/}
        单行注释
        {
          //注释内容
        }
  ## dangerouslySetInnerHTML={{__html: 值}}不转译成字符串
  ## label上加for则要用htmlFor  class则要用className
  ## 引入css  import "css地址"
  ## state或props发生变化render函数重新执行
# 组建拆分以及组件之间传值
  ## 父组件向子组件传递数据通过属性传值子组件通过this.props.属性接收
  ## 子组件向父组件传递数据并修改父组件内容但不允许直接进行修改
     子组件可调用父组件传递过来的方法
  ## 当父组件的render函数被运行时,它的子组件的render都将重新运行
# propTypes和DefaultProps
# 虚拟dom就是个JS对象，用它来描述真实DOM
  # 虚拟DOM的发展
    1、state 数据 => JSX 模板 => 数据和模板相结合生成真实DOM => state发生改变 => 数据+模板生成真实DOM 替换原始DOM
    缺陷:第一次生成完整dom片段  第二次生成完整dom片段  第二次的DOM替换第一次的DOM 非常耗性能
    2、state 数据 => JSX 模板 => 数据和模板相结合生成真实DOM => state发生改变 => 并不直接替换原始DOM =>新的dom（documentFragment）和原始dom做对比找差异 =>找出变化进行替换  但性能提升并不明显
    3、state 数据 => JSX 模板 => 数据和模板相结合生成虚拟DOM => 用虚拟dom结构生成真实DOM（虚拟DOM是JS对象,用它来描述真实DOM）（损耗性能但是极小）
      eg: ['div', {'id': 'abc'}, ['span', {}, 'hello world']]
    => state发生变化 => 数据+模板 生成新的虚拟dom（极大的提升了性能） => 比较原始虚拟DOM和虚拟DOM区别，找到区别 => 直接操作DOM 改变对应的区别内容
  # 深入虚拟DOM
    JSX语法并不是真实DOM JSX语法之所以存在是为了编写代码便捷
    return <div id='div'><span>我是内容</span></div>
    等同于
    react.createElement('div', {"id": "div"}, react.createElement('span', {}, "我是内容"))
    JSX => 转化为react.createElement => 虚拟dom => 真实dom
  # 虚拟dom带来的好处
    1、性能提升
    2、它使得跨端应用得以实现。React Native
  # 虚拟dom的diff算法（diffrence）
    比较原始虚拟DOM和虚拟DOM区别的方式叫diff算法（同层虚拟dom比对）
    同层比对逐层比对,若一层不满足比对要求那下面的就不会在进行比对会直接新的替换掉老的,这样会提升性能
    列表循环里面的key值是为了提升虚拟dom比对的性能才存在的（key值尽量不要使用下标因为要保持key值的稳定）
    diff大大提升了两个虚拟dom比对的性能
    key值比对和同层比对是diff算法的一部分
# react的ref
  eg: <input ref={(input) => {this.input = input}} />  获取值this.input.value
  react但不建议使用,在使用ref的时候有可能会获取dom不及时原因是setState是异步的
# react的生命周期
  生命周期函数指在某一个时刻组件会自动调用执行的函数
  constructor和react的生命周期函数没有区别但并不是react生命周期函数,不是react独有的是es6的语法自带的函数,在组件创建时自动调用执行的函数
  render生命周期:
    Initialization -> 初始化数据 state、props（在组件里constructor就是初始化的位置）
    Mounting 挂载 -> 
      componentWillMount  组件即将被挂载到页面上的时候自动执行(只在挂载的时候执行)
      render  渲染
      componentDidMount  组件被挂载到页面之后自动执行(只在挂载的时候执行)
      ps:挂载是组件第一次放在页面上的时候执行
    Updation 组件更新（组件只有state和props变化的时候才会更新）
      state和props
        componentWillReceiveProps  当一个组件从的父组件接受props参数且该组件必须是非首次存在于父组件中才会执行,state无该生命周期函数（子组件的生命周期函数）
        shouldComponentUpate  组件被更新之前自动执行,但该方法必须返回一个布尔值,该布尔值是决定该组件是否更新,ture会更新组件且执行接下来的生命周期false则反之
        componentWillUpdate  组建更新之前自动执行但是shouldComponentUpate之后执行
        render  渲染更新
        componentDidUpdate  组件更新完成之后进行执行
    Unmounting  
      componentWillUnMount  当该组件即将从被页面中删除时自动执行（子组件的生命周期函数）
    ps:所有生命周期函数除render都可不存在因为render的component组件里默认内置了除render外所有生命周期函数
    借助shouldComponentUpdate生命周期提升性能减少子组件无谓渲染:
      shouldComponentUpdate(nextProps, nextStates) {
        if(nextProps.值 !== this.this.props.值){
          return true
        }{
          return false
        }
      }
      componentDidMount可以进行ajax请求数据
# react的css过渡动画
  react-transition-group
  通过js改变className

## react衍生思考
  # 声明式开发是类似react直接操作数据节约掉大量的操作dom
    （命令式开发是类似jq直接操作dom）
  # 可以与其他框架并存
  # 组件化
  # 单项数据流（父组件可向子组件传值，但子组件只能使用该值但不能直接改变）
    ps:react若无单项数据流则每个子组件都可修改维护代码困难
  # 视图层框架（react只解决数据和页面的渲染问题）
  # 函数式编程（方便维护,给前端自动化测试带来便捷）

react只是个轻量的视图层框架

## redux
  redux = Reducer + Flux
  redux设计理念:所有数据放在store进行管理,一个组件改变store数据内容,其他组件就感知到变化再去获取数据从而达到了一个数据改变的内容
# redux的工作流程
  action    → store  → reducers
  Creators  ←   ↓    ←
        react Components
  # reducer可以接受state单绝不能修改state可进行深拷贝再进行操作并且必须返回数据
  # store.subscribe(订阅函数)
# redux知识点
  # redux的设计和使用的三项原则:
    1、store必须是唯一的
    2、只有store能改变自己的数据
    3、reducer必须是纯函数（纯函数指的是给定固定的输入就一定会有固定的输出,而且不会有任何副作用）
  # redux的api
    createStore 创建store
    store.dispatch 派发action
    store.getState 获取store的所有内容
    store.subscribe 订阅store改变,若发生改变则subscribe接受的回调函数就会执行
  # redux组件
    ui组件(只做页面渲染)和容器组件(页面逻辑)
    无状态组件(该组件只有render函数只做页面渲染)
    eg:const 组件名 = (props) => {
      (
        <div>{{props.content}}</div>
      )
    }
    无状态组件比ui组件性能更高,因为ui组件是个js类有生命周期函数,既要执行生命周期函数又要执行render所以性能较差
  # redux异步请求数据
  # redux-thunk中间件（异步代码的拆分处理,基本上没有api只是在action里面可以返回函数）
    redux-thunk支持action返回函数可写异步代码返回函数后自动执行函数参数dispatch
    redux-thunk的中间指的是action和store之间的dispatch,该中间件指的是对dispatch的封装升级,把异步方法在action里去执行
    有助于自动化测试以及代码的拆分管理
  # redux-saga中间件（异步代码的拆分处理,处理大型项目时优于redux-thunk）
    saga文件一定要导出一个generator函数
    takeEvery是一个saga的方法  参数1是捕获type,参数2是捕获到之后进行执行的generator函数
    put是一个saga的方法  等价于store.dispatch
    ps:generator函数操作前使用yeild
  # react-redux(第三方模块)
    第一个核心api是Provider,它进行连接store之后它内部组件就能使用connect获取store数据(提供器)
    connect connect(mapStateToProps(该参数是store的state), mapDispatchToProps)(组件名) (连接)返回的是一个容器组件
  # immutable.js(第三方模块库) 解决新手state的变更带来的问题可改变state时不需要深拷贝
    immutable对象toJS() toJS方法可以将immutable对象转化为js对象
    默认state对象) formJS方法可以将js对象转化为immutable对象
    state.get('键') 获取state数据
    state.getIn('父键','子键') 获取state的下的父键的子键
    state.set('键') 设置state数据 该方法是拿到需要变更的内容做一个结合返回一个全新的对象也并没有改变state
  # redux的combineReducers方法可以将多个reducer组合成一个reducer
    const reducer = combineReducers({
      header: 组件中的某个reducer
    })
    最后再进行抛出reducer
  # redux-immutable(第三方模块)
    redux-immutable的combineReducers方法可以将state转化成immutable对象
      使用方法就是将redux的combineReducers方法替换成redux-immutable的combineReducers方法

# ps:JSON.parse(JSON.stringify(被拷贝对象))深拷贝 还可以去除被拷贝对象
