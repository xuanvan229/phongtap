<template>
  <div class="hello">
    <el-row>
      <el-col :span="24">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3>Add User</h3>
          </div>
          <div class="panel-body">
            <form class="form-inline" id="add" v-on:submit.prevent="addUser">
              <el-col :sx="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="gioitinh">Giới Tính</label>
                <el-select class="fullform" v-model="newuser.gioitinh" placeholder="Select">
                  <el-option
                    v-for="item in listgioitinh"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="lop">Lớp</label>
                <el-select class="fullform" v-model="newuser.goi" placeholder="Select">
                  <el-option
                    v-for="item in listphongtap"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="GoiTap">Họ và Tên</label>
                <el-input class="fullform"
                  placeholder="Please Input"
                  v-model="newuser.name">
                </el-input>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="GoiTap">Ngày sinh</label>
                <el-date-picker
                  class="fullform"
                  v-model="newuser.birthday"
                  type="date"
                  placeholder="Pick a day">
                </el-date-picker>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="GoiTap">Địa chỉ</label>
                <el-input class="fullform"
                  placeholder="Please Input"
                  v-model="newuser.diachi">
                </el-input>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="GoiTap">Ngày phát hành</label>
                <el-date-picker
                  class="fullform"
                  v-model="phathanh"
                  type="date"
                  placeholder="Pick a day">
                </el-date-picker>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="GoiTap">Ngày gia hạn</label>
                <el-date-picker
                  class="fullform"
                  v-model="newuser.giahan"
                  type="date"
                  placeholder="Pick a day">
                </el-date-picker>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="GoiTap">Số tháng đóng</label>
                <el-input class="fullform"
                  placeholder="Please Input"
                  v-model="newuser.sothang">
                </el-input>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24">
            <el-button v-on:click="addUser"type="primary">Primary Button</el-button>
            </el-col>
            </form>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="page-header">
      <h1>{{msg}}</h1>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>All User</h3>
        <form class="group-inline" id="search" v-cloak>
          <div class="form-group">
            <input type="text" v-model="searchString" placeholder="Nhập tên cần tìm">
          </div>
        </form>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã KH</th>
              <th>Gói tập</th>
              <th>Lớp</th>
              <th>Họ và Tên</th>
              <th>Ngày Sinh</th>
              <th>Giới tính</th>
              <th>Địa chỉ</th>
              <th>Ngày phát hành</th>
              <th>Ngày gia hạn</th>
              <th>Số tháng đóng</th>
              <th>Ngày hết hạn</th>
              <th>Trạng thái</th>
              <th>Cập nhât</th>
              <th>Ẩn</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in filterUser">
              <td>{{user.stt}}</td>
              <td>{{user.makh}}</td>
              <td>{{user.goi}}</td>
              <td>{{user.lop}}</td>
              <td>{{user.name}}</td>
              <td>{{user.birthday}}</td>
              <td>{{user.gioitinh}}</td>
              <td>{{user.diachi}}</td>
              <td>{{user.phathanh}}</td>
              <td>{{user.sothang}}</td>
              <td>{{user.giahan}}</td>
              <td>{{user.hethan}}</td>
              <td>{{user.trangthai}}</td>
              <td><span class="glyphicon glyphicon-pencil" v-on:click="update(artile)"></span>
              </td>
              <td><span class="glyphicon glyphicon-trash" v-on:click="removeBook(artile)"></span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from 'Firebase'
let config = {
  apiKey: 'AIzaSyDg4PMF2hQ6ZtjywC1ZDzM9J0i-igqo-tI',
  authDomain: 'phongtap-95ebd.firebaseapp.com',
  databaseURL: 'https://phongtap-95ebd.firebaseio.com',
  projectId: 'phongtap-95ebd',
  storageBucket: 'phongtap-95ebd.appspot.com',
  messagingSenderId: '225931463676'
}
let app = Firebase.initializeApp(config)
let db = app.database()
let danhsachref = db.ref('danhsach')

export default {
  name: 'hello',
  firebase: {
    listuser: danhsachref
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      listgioitinh: [{
        value: 'Nam',
        label: 'Nam'
      },
      {
        value: 'Nữ',
        label: 'Nữ'
      }],
      listphongtap: [
        {
          value: 'Gym',
          label: 'Gym'
        },
        {
          value: 'Aerobic',
          label: 'Aerobic'
        }
      ],
      newuser: {
        stt: '',
        goi: '',
        lop: '',
        name: '',
        birthday: '',
        gioitinh: '',
        diachi: '',
        phathanh: '',
        sothang: '',
        giahan: '',
        hethan: '',
        trangthai: ''
      },
      searchString: '',
      stt: '',
      makh: '',
      goi: '',
      lop: '',
      name: '',
      birthday: '',
      gioitinh: '',
      diachi: '',
      phathanh: '',
      sothang: '',
      giahan: '',
      hethan: '',
      trangthai: ''

    }
  },
  computed: {
    filterUser: function () {
      var articlearray = this.listuser
      var searchitem = this.searchString
      console.log(articlearray)
      if (!searchitem) {
        return articlearray
      }
      searchitem = searchitem.trim().toLowerCase()

      articlearray = articlearray.filter(function (item) {
        if (item.name.toLowerCase().indexOf(searchitem) !== -1) {
          return item
        }
      })
      return articlearray
    }
  },
  methods: {
    addUser: function () {
      console.log(this.newuser)
      var newuser2 = {
        stt: '1',
        phathanh: this.phathanh
      }
      console.log(this.newuser.phathanh)
      this.newuser.stt = this.listuser.length
      danhsachref.push(newuser2)
      this.newuser.stt = ''
      this.newuser.goi = ''
      this.newuser.lop = ''
      this.newuser.name = ''
      this.newuser.birthday = ''
      this.newuser.gioitinh = ''
      this.newuser.diachi = ''
      this.newuser.phathanh = ''
      this.newuser.sothang = ''
      this.newuser.giahan = ''
      this.newuser.hethan = ''
      this.newuser.trangthai = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
.fullform {
  width: 100%;
}
.form-group {
  width:100%;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
