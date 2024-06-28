const colorNormalMapList = [
  // JDV通用逻辑 /jdv/mobile/gateway/**
  {
      pathname: '/jdv/mobile/gateway/',
      functionId: 'jdv_mobile_gateway',
  },
  // 低代码通用逻辑 /composer-sun/api/process/**
  {
      pathname: '/composer-sun/api/process/',
      functionId: 'composer_sun_api_process',
  },
  // 低代码通用逻辑 /composer-mars/api/process/**
  {
      pathname: '/composer-mars/api/process/',
      functionId: 'composer_mars_api_process',
  },
  // /hjy/**
  {
      pathname: '/hjy/',
      functionId: 'hjy_common',
  },
  // /hjycenter/**
  {
      pathname: '/hjycenter/',
      functionId: 'hjycenter_common',
  },
  // /lowcode/**
  {
      pathname: '/lowcode/',
      functionId: 'lowcode_common',
  },
  // /datamix/**
  {
      pathname: '/datamix/',
      functionId: 'datamix_common',
  },
  // /public/**
  {
      pathname: '/public/',
      functionId: 'public_common',
  },
  // /flow/**
  {
      pathname: '/flow/',
      functionId: 'flow_common',
  },
  // /vertical/**
  {
      pathname: '/vertical/',
      functionId: 'vertical_common',
  },
  // /phoenix/**
  {
      pathname: '/phoenix/',
      functionId: 'phoenix_common',
  },
];

const a = '/hjycenter/api/common/pageInfo'

const b = '/hjy/api/common/pageInfo'

const c = '/hjy11/api/common/pageInfo'

const d = '/jdv/mobile/gateway/applist'


function isHasApi(params) {
  const isColorNormalMapList =
  colorNormalMapList.find(({ pathname }) =>
    params.includes(pathname),
  );
  console.log('isColorNormalMapList: ', isColorNormalMapList);
}

isHasApi(a)
isHasApi(b)
isHasApi(c)
isHasApi(d)




