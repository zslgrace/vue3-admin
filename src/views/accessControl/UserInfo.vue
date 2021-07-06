<template>
  <div class="userInfo">
    <el-table :data="tableData" border>
      <el-table-column
        prop="userName"
        label="用户名">
      </el-table-column>
      <el-table-column
        prop="role"
        label="角色类型">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="createBy"
        label="创建人">
      </el-table-column>
  </el-table>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class UserInfo extends Vue {
  tableData = [
    {
      userName: 'user1',
      role: ['admin'],
      createTime: '2020-12-12',
      createBy: 'admin',
    },
    {
      userName: 'user2',
      role: ['admin'],
      createTime: '2020-12-22',
      createBy: 'admin',
    },
  ]
}
</script>
<style lang="scss" scope>
  .userInfo{
    padding: 30px;
  }
</style>
