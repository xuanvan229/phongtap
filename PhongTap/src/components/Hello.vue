<template>
  <div class="hello">
    <el-row>
      <el-col :span="24">
        <el-col :xs="24" :sm="24" :md="24">
          <h1 class="titleMain">{{msg}}</h1>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24">
          <el-button v-if="!checkadd" v-on:click="showadduser()" class="addbtn"type="primary"><i class="el-icon-edit"></i> Thêm thành viên</el-button>
          <el-button v-else v-on:click="doneadduser()" class="addbtn"type="primary"><i class="el-icon-close"></i> Đóng</el-button>
        </el-col>
      </el-col>
    </el-row>
    <el-row v-if="checkadd">
      <el-col :span="24">
        <div class="panel panel-default">
          <div class="panel-body ">
            <h4 class="titleh4">Nhập thông tin thành viên mới</h4>
            <form class="form-inline" id="add" v-on:submit.prevent="addUser">
              <el-col :xs="24" :sm="12" :md="6">
                <div class="form-group">
                  <label for="GoiTap">Họ và tên</label>
                  <el-input class="fullform"
                    placeholder="Nguyễn Văn A..."
                    v-model="newuser.name">
                  </el-input>
                </div>
              </el-col>
              <el-col :sx="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="gioitinh">Giới Tính</label>
                <el-select class="fullform" v-model="newuser.gioitinh" placeholder="Nam/Nữ">
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
                <el-select class="fullform" v-model="newuser.goi" placeholder="Gym/Aerobic">
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
                <label for="lop">Gói tập</label>
                <el-input class="fullform"
                  placeholder=""
                  v-model="newuser.goitap">
                </el-input>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="GoiTap">Năm sinh</label>
                <el-input
                  placeholder="Nhập năm sinh"
                  icon="date"
                  v-model="newuser.birthday">
                </el-input>
                <!-- <input class="form-group" type="date" v-model="newuser.birthday"> -->
              </div>
            </el-col>
            <!-- <el-col :xs="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="GoiTap">Địa chỉ</label>
                <el-input class="fullform"
                  placeholder="Please Input"
                  v-model="newuser.diachi">
                </el-input>
              </div>
            </el-col> -->
            <el-col :xs="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="GoiTap">Ngày phát hành</label>
                <input class="form-group el-input__inner" type="date" v-model="newuser.phathanhkoshow">
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="GoiTap">Ngày gia hạn</label>
                <input class="form-group el-input__inner" type="date" v-model="newuser.giahankoshow">
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="GoiTap">Số tháng gia hạn thêm</label>
                <el-input class="fullform"
                  placeholder="1 tháng = 30 ngày"
                  v-model="newuser.sothang" min="1" type="number">
                </el-input>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24">
            <el-button v-on:click="addUser"type="primary" class="mgn_left_10">Thêm</el-button>
            </el-col>
            </form>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row v-if="checkupdate">
      <el-col :span="24">
        <!-- <h1>Update user</h1> -->
        <div class="panel panel-default">
          <div class="panel-body">
            <h4 class="titleh4">Chỉnh sửa thông tin thành viên</h4>
            <form class="form-inline" id="add" v-on:submit.prevent="addUser">
              <el-col :xs="24" :sm="12" :md="6">
                <div class="form-group">
                  <label for="GoiTap">Họ và tên</label>
                  <el-input class="fullform"
                    v-model="userupdate.name">
                  </el-input>
                </div>
              </el-col>
              <el-col :sx="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="gioitinh">Giới Tính</label>
                <el-select class="fullform" v-model="userupdate.gioitinh" placeholder="Nam/Nữ">
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
                <el-select class="fullform" v-model="userupdate.goi" placeholder="Select">
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
                <label for="lop">Gói tập</label>
                <el-input class="fullform"
                  placeholder=""
                  v-model="userupdate.goitap">
                </el-input>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="GoiTap">Năm sinh</label>
                <el-input
                  placeholder="Nhập năm sinh"
                  icon="date"
                  v-model="userupdate.birthday">
                </el-input>
              </div>
            </el-col>
            <!-- <el-col :xs="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="GoiTap">Địa chỉ</label>
                <el-input class="fullform"
                  placeholder="Please Input"
                  v-model="userupdate.diachi">
                </el-input>
              </div>
            </el-col> -->
            <!-- <el-col :xs="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="GoiTap">Ngày phát hành</label>
                <input class="form-group el-input__inner" type="date" v-model="userupdate.phathanhkoshow">
              </div>
            </el-col> -->
            <el-col :xs="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="GoiTap">Ngày gia hạn</label>
                <input class="form-group el-input__inner" type="date" v-model="userupdate.giahankoshow">
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
              <div class="form-group">
                <label for="GoiTap">Số tháng gia hạn</label>
                <el-input class="fullform"
                  placeholder="1 tháng = 30 ngày"
                  v-model="userupdate.sothang" min="1" type="number">
                </el-input>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24">
            <el-button v-on:click="updateUser"type="primary" class="mgn_left_10">Cập nhật</el-button>
            </el-col>
            </form>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- <div class="page-header">
      <h1>{{msg}}</h1>
    </div> -->
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="titleSearchMem"><i class="el-icon-search"></i> Tìm thành viên</h3>
        <form class="group-inline" id="search" v-cloak>
          <div class="form-group searchMember ">
            <input type="text" class="el-input__inner" v-model="searchString" placeholder="Nhập tên cần tìm">
          </div>
        </form>
      </div>
      <div class="panel-body">
        <h3 class="titleAll">Danh sách tất cả thành viên</h3>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>STT</th>
              <!-- <th>Mã KH</th> -->
              <th class="tal">Lớp</th>
              <th class="tal">Gói tập</th>
              <th class="tal">Họ và tên</th>
              <th>Năm sinh</th>
              <th class="tal">Giới tính</th>
              <!-- <th>Địa chỉ</th> -->
              <th>Ngày phát hành</th>
              <th>Ngày gia hạn</th>
              <th>Số tháng đóng</th>
              <th>Ngày hết hạn</th>
              <th>Trạng thái</th>
              <th>Cập nhật</th>
              <th>Ẩn</th>
              <th>Xoá</th>
            </tr>
          </thead>
            <transition-group name="fade" tag="tbody">
            <tr class="user" v-if="!user.checked" v-for="user in filterUser" v-bind:key="user" >
              <!-- <td class="tac">{{user.stt}}</td> -->
              <td><!-- dành cho stt --></td>
              <!-- <td>{{user.makh}}</td> -->
              <td class="tal">{{user.goi}}</td>
              <td class="tal">{{user.goitap}}</td>
              <td class="tal">{{user.name}}</td>
              <td>{{user.birthday}}</td>
              <td class="tal">{{user.gioitinh}}</td>
              <!-- <td>{{user.diachi}}</td> -->
              <td>{{user.phathanh}}</td>
              <td>{{user.giahan}}</td>
              <td>{{user.sothang}}</td>
              <td>{{user.hethan}}</td>
              <td>{{user.trangthai}}</td>
              <td class="tac btnEdit"><span class="el-icon-edit updatefun" v-on:click="update(user)" title="Chỉnh sửa"></span>
              </td>
              <td><label class="switch" >
              <input v-on:click="check(user)" type="checkbox" id="checkbox" v-model="user.checked" checked>
              <div class="slider round"></div>
              </label></td>
              <td><span class="el-icon-delete updatefun" v-on:click="xoauser(user)" title="Chỉnh sửa"></span></td>
            </tr>
          </transition-group>
        </table>
        <div class="listHethan">
            <h3 class="titleHethan">Danh sách thành viên đã hết hạn</h3>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th class="tal">Lớp</th>
                        <th class="tal">Gói tập</th>
                        <th class="tal">Họ và tên</th>
                        <th>Năm sinh</th>
                        <th class="tal">Giới tính</th>
                        <th>Ngày phát hành</th>
                        <th>Ngày gia hạn</th>
                        <th>Số tháng đóng</th>
                        <th>Ngày hết hạn</th>
                        <th>Trạng thái</th>
                        <th>Cập nhật</th>
                        <th>Ẩn</th>
                    </tr>
                </thead>
                  <transition-group name="fade" tag="tbody">
                    <tr v-if="!userhh.checked" v-for="userhh in filterUserhethan"  v-bind:key="userhh">
                        <td><!--STT--></td>
                        <td class="tal">{{userhh.goi}}</td>
                        <td class="tal">{{userhh.goitap}}</td>
                        <td class="tal">{{userhh.name}}</td>
                        <td>{{userhh.birthday}}</td>
                        <td>{{userhh.gioitinh}}</td>
                        <td>{{userhh.phathanh}}</td>
                        <td>{{userhh.giahan}}</td>
                        <td>{{userhh.sothang}}</td>
                        <td>{{userhh.hethan}}</td>
                        <td>{{userhh.trangthai}}</td>
                        <td class="tac btnEdit"><span class="el-icon-edit updatefun" v-on:click="update(userhh)" title="Chỉnh sửa"></span>
                        </td>
                        <td><label class="switch" >
                        <input v-on:click="check(userhh)" type="checkbox" id="checkbox" v-model="userhh.checked" checked>
                        <div class="slider round"></div>
                        </label></td>
                    </tr>
                </transition-group>
            </table>
        </div>
        <div class="listHide">
            <h3 class="titleHide">Danh sách thành viên bị ẩn</h3>
            <p class="red_italic">(thành viên đã nghỉ tập lâu ngày không gia hạn)</p>
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th class="tal">Lớp</th>
                        <th class="tal">Gói tập</th>
                        <th class="tal">Họ và tên</th>
                        <th>Năm sinh</th>
                        <th class="tal">Giới tính</th>
                        <th>Ngày phát hành</th>
                        <th>Ngày gia hạn</th>
                        <th>Số tháng đóng</th>
                        <th>Ngày hết hạn</th>
                        <th>Trạng thái</th>
                        <th>Cập nhật</th>
                        <th>Ẩn</th>
                    </tr>
                </thead>
                  <transition-group name="fade" tag="tbody">
                    <tr v-for="userhh in filtercheckan"  v-bind:key="userhh">
                      <td><!--STT--></td>
                      <td class="tal">{{userhh.goi}}</td>
                      <td class="tal">{{userhh.goitap}}</td>
                      <td class="tal">{{userhh.name}}</td>
                      <td>{{userhh.birthday}}</td>
                      <td>{{userhh.gioitinh}}</td>
                      <td>{{userhh.phathanh}}</td>
                      <td>{{userhh.giahan}}</td>
                      <td>{{userhh.sothang}}</td>
                      <td>{{userhh.hethan}}</td>
                      <td>{{userhh.trangthai}}</td>
                      <td class="tac btnEdit"><span class="el-icon-edit updatefun" v-on:click="update(userhh)" title="Chỉnh sửa"></span>
                      </td>
                      <td><label class="switch" >
                      <input v-on:click="uncheck(userhh)" type="checkbox" id="checkbox" v-model="userhh.checked" checked>
                      <div class="slider round"></div>
                      </label></td>
                    </tr>
                </transition-group>
            </table>
        </div>
      </div>
    </div>
    <footer class="footer">
        <h4>Hệ thống phòng tập <span class="blue">Gym và Aerobic Olympia</span>: 150 Đoàn Hữu Trưng, Hòa An, Cẩm Lệ, Đà Nẵng</h4>
    </footer>
  </div>
</template>

<script>
import Firebase from 'Firebase'
import moment from 'moment'
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
  components: {
    'vue-datetime-picker': require('vue-datetime-picker')
  },
  firebase: {
    listuser: danhsachref
  },
  data () {
    return {
      msg: 'Hệ thống quản lý thành viên',
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
        'birthday': '',
        gioitinh: '',
        diachi: '',
        phathanh: '',
        phathanhkoshow: '',
        sothang: '',
        giahan: '',
        goitap: '',
        giahankoshow: '',
        hethan: '',
        hethankoshow: '',
        checkhethan: false,
        trangthai: '',
        key: '',
        checked: false
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
      trangthai: '',
      checkadd: false,
      checkupdate: false,
      checked: false,
      userupdate: '',
      userupdate2: '',
      key1: '',
      key2: ''
    }
  },
  computed: {
    filterUser: function () {
      var ngayhientai = moment().date()
      var thanghientai = moment().month() + 1
      var namhientai = moment().year()
      var articlearray = this.listuser.map(function (item) {
        if ((ngayhientai >= moment(item.hethankoshow).date()) && (thanghientai >= moment(item.hethankoshow).month() + 1) && (namhientai >= moment(item.hethankoshow).year())) {
          item.trangthai = 'Đã hết hạn'
        } else {
          item.trangthai = 'Chưa hết hạn'
        }
        return item
      })
      var searchitem = this.searchString
      // console.log(articlearray)
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
    },
    filterUserhethan: function () {
      var arrayuser = this.listuser.filter(function (item) {
        if (item.checkhethan === true) {
          return item
        }
      })
      return arrayuser
    },
    filtercheckan: function () {
      var arrayuser = this.listuser.filter(function (item) {
        if (item.checked === true) {
          return item
        }
      })
      return arrayuser
    }
  },
  methods: {
    addUser: function () {
      var dategiahan = moment(this.newuser.giahankoshow)
      // var parts = dategiahan.match(/(\d+)/g)
      // var dateafterconvert = new Date(parts[0], parts[1] - 1, parts[2])
      var x = moment(dategiahan).format('DD/MM/YYYY')
      var y = moment(dategiahan).format('L')
      var datephathanh = moment(this.newuser.phathanhkoshow)
      var xph = moment(datephathanh).format('DD/MM/YYYY')
      this.newuser.giahankoshow = moment(dategiahan).format('L')
      this.newuser.phathanhkoshow = moment(datephathanh).format('L')
      this.newuser.phathanh = xph
      this.newuser.giahan = x
      var getdate = moment(y).add(30 * this.newuser.sothang, 'days')
      var datehethan = moment(getdate).format('DD/MM/YYYY')
      this.newuser.hethan = datehethan
      this.newuser.hethankoshow = moment(getdate).format('L')
      this.newuser.stt = this.listuser.length + 1
      var ngayhientai = moment().date()
      var thanghientai = moment().month() + 1
      var namhientai = moment().year()
      if ((ngayhientai >= moment(this.newuser.hethankoshow).date()) && (thanghientai >= moment(this.newuser.hethankoshow).month() + 1) && (namhientai >= moment(this.newuser.hethankoshow).year())) {
        this.newuser.checkhethan = true
      } else {
        this.newuser.checkhethan = false
      }
      danhsachref.push(this.newuser)
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
    },
    updateUser: function () {
      var dategiahan = moment(this.userupdate.giahankoshow)
      var x = moment(dategiahan).format('L')
      var y = moment(dategiahan).format('DD/MM/YYYY')
      var datephathanh = moment(this.userupdate.phathanhkoshow)
      var xph = moment(datephathanh).format('DD/MM/YYYY')
      this.userupdate.giahankoshow = moment(dategiahan).format('L')
      this.userupdate.phathanhkoshow = moment(datephathanh).format('L')
      this.userupdate.phathanh = xph
      var getdate = moment(x).add(30 * this.userupdate.sothang, 'days')
      var datehethan = moment(getdate).format('DD/MM/YYYY')
      this.userupdate.hethan = datehethan
      this.userupdate.hethankoshow = moment(getdate).format('L')
      this.userupdate.giahan = y
      if (this.userupdate.key === '') {
        this.userupdate.key = this.key1
      }
      var ngayhientai = moment().date()
      var thanghientai = moment().month() + 1
      var namhientai = moment().year()
      if ((ngayhientai >= moment(this.userupdate.hethankoshow).date()) && (thanghientai >= moment(this.userupdate.hethankoshow).month() + 1) && (namhientai >= moment(this.userupdate.hethankoshow).year())) {
        this.userupdate.checkhethan = true
      } else {
        this.userupdate.checkhethan = false
      }
      this.hamupdate(this.userupdate, this.userupdate.birthday, 'birthday')
      this.hamupdate(this.userupdate, this.userupdate.checked, 'checked')
      this.hamupdate(this.userupdate, this.userupdate.checkhethan, 'checkhethan')
      this.hamupdate(this.userupdate, this.userupdate.diachi, 'diachi')
      this.hamupdate(this.userupdate, this.userupdate.giahan, 'giahan')
      this.hamupdate(this.userupdate, this.userupdate.giahankoshow, 'giahankoshow')
      this.hamupdate(this.userupdate, this.userupdate.gioitinh, 'gioitinh')
      this.hamupdate(this.userupdate, this.userupdate.goi, 'goi')
      this.hamupdate(this.userupdate, this.userupdate.goitap, 'goitap')
      this.hamupdate(this.userupdate, this.userupdate.hethan, 'hethan')
      this.hamupdate(this.userupdate, this.userupdate.hethankoshow, 'hethankoshow')
      this.hamupdate(this.userupdate, this.userupdate.key, 'key')
      this.hamupdate(this.userupdate, this.userupdate.lop, 'lop')
      this.hamupdate(this.userupdate, this.userupdate.name, 'name')
      this.hamupdate(this.userupdate, this.userupdate.phathanh, 'phathanh')
      this.hamupdate(this.userupdate, this.userupdate.phathanhkoshow, 'phathanhkoshow')
      this.hamupdate(this.userupdate, this.userupdate.sothang, 'sothang')
      this.hamupdate(this.userupdate, this.userupdate.stt, 'stt')
      this.hamupdate(this.userupdate, this.userupdate.trangthai, 'trangthai')
      this.checkupdate = false
      // let key = this.userupdate['.key']
      // delete this.userupdate['.key']
      // console.log(this.userupdate)
      // console.log(key)
      // danhsachref.child(key).set(this.userupdate)
      // console.log(this.listuser)
      // this.userupdate = ''
      // console.log(this.userupdate)
      // this.filterUser
    },
    showadduser: function () {
      this.checkadd = true
    },
    doneadduser: function () {
      this.checkadd = false
    },
    update: function (user) {
      this.userupdate2 = user
      this.userupdate = this.userupdate2
      this.key1 = user['.key']
      if (this.key1 != null) {
        this.key2 = this.key1
      }
      this.checkupdate = true
    },
    check: function (user) {
      // var key = user['.key']
      // delete user['.key']
      // danhsachref.child(key).set(user)
      this.hamupdate(user, user.checked, 'checked')
      // console.log('check')
      // console.log(user.checked)
    },
    hamupdate: function (user, value, truong) {
      danhsachref.child(user['.key']).child(truong).set(value)
    },
    uncheck: function (user) {
      this.hamupdate(user, user.checked, 'checked')
      // var key = user['.key']
      // delete user['.key']
      // danhsachref.child(key).set(user)
      // console.log('check')
      // console.log(user.checked)
    },
    xoauser: function (user) {
      danhsachref.child(user['.key']).remove()
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
.titleMain {
    text-align: center;
}
.titleSearchMem {
    color: #2196F3;
}
.titleh4 {
    color: red;
    text-align: center;
}
.fullform {
  width: 100%;
}
.form-group {
  width:100%;
  padding: 10px;
}
.addbtn {
  /*width:50px;*/
  /*height:50px;*/
  border-radius: 5px;
  float: right;
  margin: 20px;
}

/*--------------------
        Table area
        --------------------*/
table {
    margin-bottom: 0;
}
table thead {
    background: #2196F3;
    color: #fff;
}
table thead th {
    text-align: center;
    /*font-weight: normal;*/
    font-size: 16px;
    padding: 12px 8px;
}
table tbody {
  counter-reset: rowNumber;
}
table tr {
  counter-increment: rowNumber;
}
table tr td:first-child::before {
  content: counter(rowNumber);
  min-width: 1em;
  margin-right: 0.5em;
}
table tr td{
    text-align: center;
    vertical-align: middle;
}

table tbody tr:hover {
    background: #D5ECFF;
    transition-duration: 500ms;
}
.titleAll {
    text-align: center;
    color: #2196F3;
}

.listHethan {
    padding: 20px 0;
}
.listHethan .titleHethan {
    color: #833200;
    text-align: center;
}
.listHethan table thead {
    background: #FFD24B;
}
.listHethan table thead th{
    color: #333;
}
.listHethan table tbody td {
    background: #FFFF86;
}
.listHethan table tbody tr:hover td{
    background: #FBF9E1;
    transition-duration: 500ms;
}
.listHide table thead {
    background: #0E3F52;
}
.listHide .titleHide {
    color: #0E3F52;
    text-align: center;
}
.red_italic {
    text-align: center;
    color: #ff0000;
    font-style: italic;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #2196F3;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.btnEdit span:hover{
    color: #2196F3;
}
.searchMember input {
    text-indent: 5px;
}
#search .form-group {
    padding: 0;
}
.user {
  transition: 1s;
}
/*--------------------
        Rounded sliders
        --------------------*/
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
.updatefun {
    color: #00508F;
    cursor: pointer;
    font-size: 25px;
}
.footer {
    text-align: center;
}
/*--------------------
        helper
        --------------------*/

.blue {
    color: #2196F3;
}
.tac {
    text-align: center;
}
.tal {
    text-align: left;
}
.mgn_left_10 {
    margin-left: 10px;
}
</style>
