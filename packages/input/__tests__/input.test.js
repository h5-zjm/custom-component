import input from '../src/input'

import { mount } from '@vue/test-utils'

describe('lg-input',()=>{
  test('input-text',()=>{
    const wrapper=mount(input)
    expect(wrapper.html()).toContain('input type="text"')
  })
  test('input-password',()=>{
    //如果传的type的值是password,期望他的返回的input，type=password
    const wrapper=mount(input,{
      propsData:{
        type:'password'
      }
    })
    expect(wrapper.html()).toContain('input type="password"')
  })
  test('input-password',()=>{
    //如果传的type的值是password,期望他的返回的input，type=password
    const wrapper=mount(input,{
      propsData:{
        type:'password',
        value:'admin'
      }
    })
    expect(wrapper.props('value')).toBe('admin')
  })
  test('input-snapshot',()=>{
    //快照
    const wrapper=mount(input,{
      propsData:{
        type:'text',
        value:'admin'
      }
    })
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
