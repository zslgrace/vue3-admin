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
      <el-table-column
        label="操作">
        <template #default="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small" class="btn-delete">删除</el-button>
        </template>
      </el-table-column>
  </el-table>
  <el-pagination
    class='table-pagination'
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[10, 20, 50, 100]"
    :page-size="20"
    layout="total, sizes, prev, pager, next, jumper"
    :total="400">
  </el-pagination>
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

  currentPage = 1;

  handleClick(row: any) {
    console.log(row);
  }

  handleSizeChange(val: number) {
    console.log(`每页 ${val} 条`);
  }

  handleCurrentChange(val: number) {
    console.log(`当前页: ${val}`);
  }
}
</script>
<style lang="scss" scope>
  .userInfo{
    padding: 30px;
  }
  .table-header{
    text-align: center;
  }
  .btn-delete{
    color: $red;
    &:focus,
    &:hover,
    &:active{
      color: $darkred;
    }
  }
  .table-pagination{
    margin-top: 10px;
    text-align: right;
  }
</style>
