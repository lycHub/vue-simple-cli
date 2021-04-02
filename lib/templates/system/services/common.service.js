import request from '../../../utils/request';

const prefix = '/common/';

// 行业树
export function industryTree () {
  return request.get(prefix + 'treeIndustry');
}

// 根据行业查分类
export function industrySorts (industryId) {
  return request.get(prefix + 'mallBrandCategory', { params: { industryId } });
}

// 渠道树
export function channelTree () {
  return request.get(prefix + 'treeChannel');
}
