<template>
  <!-- Search And Filter -->
  <div class="search">
    <MDBInput
      v-model="search1"
      inputGroup
      :formOutline="false"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon2"
    >
      <MDBBtn color="success">
        <i class="bi bi-search"></i>
      </MDBBtn>
    </MDBInput>
  </div>

  <!-- Products Table -->
  <div class="table-responsive">
    <MDBTable class="products-table table-responsive align-middle mb-0 bg-white">
      <thead class="bg-light">
        <tr>
          <th>Name</th>
          <th>Unit</th>
          <th>Price</th>
          <th>VAT</th>
          <th>Profit</th>
          <th>Time</th>
          <th style="font-size: 25px">
            <!-- Button trigger modal -->
            <MDBBtn color="success" aria-controls="exampleModal" @click="exampleModal = true">
              <i class="bi bi-plus-lg"></i>
            </MDBBtn>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="media d-flex align-items-center">
              <img
                class="me-2"
                src="https://picsum.photos/300/300"
                alt="DexignZone"
                style="width: 50px; height: 50px"
              />
              <div class="media-body">
                <p class="name fw-bold mb-1">GloMax</p>
                <p class="type text-muted mb-0">Health</p>
              </div>
            </div>
          </td>
          <td>
            <p class="fw-normal mb-1">KG</p>
          </td>
          <td>
            <MDBBadge style="font-size: 16px" badge="success" pill class="d-inline">50</MDBBadge>
          </td>
          <td>6</td>
          <td>5</td>
          <td>2023/4/4</td>
          <td style="font-size: 20px">
            <i class="bi bi-trash-fill me-3"></i>
            <i class="bi bi-pencil-square"></i>
          </td>
        </tr>
        <tr>
          <td>
            <div class="media d-flex align-items-center">
              <img
                class="me-2"
                src="https://picsum.photos/300/300"
                alt="DexignZone"
                style="width: 50px; height: 50px"
              />
              <div class="media-body">
                <p class="name fw-bold mb-1">Lenovo ideapad 320</p>
                <p class="type text-muted mb-0">Electronic</p>
              </div>
            </div>
          </td>
          <td>
            <p class="fw-normal mb-1">Piece</p>
          </td>
          <td>
            <MDBBadge style="font-size: 16px" badge="success" pill class="d-inline">35</MDBBadge>
          </td>
          <td>4</td>
          <td>2</td>
          <td>2023/4/4</td>
          <td style="font-size: 20px">
            <i class="bi bi-trash-fill me-3"></i>
            <i class="bi bi-pencil-square"></i>
          </td>
        </tr>
        <tr>
          <td>
            <div class="media d-flex align-items-center">
              <img
                class="me-2"
                src="https://picsum.photos/300/300"
                alt="DexignZone"
                style="width: 50px; height: 50px"
              />
              <div class="media-body">
                <p class="name fw-bold mb-1">GloMax</p>
                <p class="type text-muted mb-0">Health</p>
              </div>
            </div>
          </td>
          <td>
            <p class="fw-normal mb-1">Meter</p>
          </td>
          <td>
            <MDBBadge style="font-size: 16px" badge="success" pill class="d-inline">55</MDBBadge>
          </td>
          <td>5</td>
          <td>1</td>
          <td>2023/4/4</td>
          <td style="font-size: 20px">
            <i class="bi bi-trash-fill me-3"></i>
            <i class="bi bi-pencil-square"></i>
          </td>
        </tr>
      </tbody>
    </MDBTable>
  </div>
  <!-- Modal -->
  <MDBModal
    class="modal"
    id="exampleModal"
    tabindex="-1"
    labelledby="exampleModalLabel"
    v-model="exampleModal"
  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalLabel"> Add Product </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
      <!-- Name English -->
      <MDBInput
        type="text"
        label="Product Name in English"
        id="ProductNameEn"
        v-model="ProductNameEn"
        wrapperClass="mb-4"
      />
      <!-- Name France -->
      <MDBInput
        type="text"
        label="Product Name in France"
        id="ProductNameFr"
        v-model="ProductNameFr"
        wrapperClass="mb-4"
      />
      <!-- Name Arabic -->
      <MDBInput
        type="text"
        label="Product Name in Arabic"
        id="ProductNameAr"
        v-model="ProductNameAr"
        wrapperClass="mb-4"
      />
      <!-- Select Type -->
      <label for="type" class="me-4 mb-4">Type</label>
      <select class="custom-select">
        <option value="Electronic">Electronic</option>
        <option value="Health">Health</option>
        <option value="Food">Food</option>
      </select>

      <!-- Price -->
      <MDBInput
        type="number"
        label="Product Price"
        id="ProductPrice"
        v-model="ProductPrice"
        wrapperClass="mb-4"
      />
      <!-- Profit -->
      <MDBInput
        type="number"
        label="Product Profit"
        id="ProductProfit"
        v-model="ProductProfit"
        wrapperClass="mb-4"
      />
      <!-- VAT -->
      <MDBInput
        type="number"
        label="Product VAT"
        id="ProductVAT"
        v-model="ProductVAT"
        wrapperClass="mb-4"
      />
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" @click="exampleModal = false">Close</MDBBtn>
      <MDBBtn color="success">Add Product</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
</template>
<script setup>
import { ref } from 'vue'
import {
  MDBTable,
  MDBBadge,
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBInput
} from 'mdb-vue-ui-kit'

// Search
const search1 = ref('')
// Modal Trigger
const exampleModal = ref(false)
// Name
const ProductNameEn = ref('')
const ProductNameFr = ref('')
const ProductNameAr = ref('')
// Price
const ProductPrice = ref('')
const ProductProfit = ref('')
const ProductVAT = ref('')
</script>

<style lang="scss" scoped>
i {
  cursor: pointer;
}
.search {
  width: calc(100vw - (240px + 1.4rem));
  float: right;
  padding: 10px 20px;
  width: 300px;
  @media (max-width: 991px) {
    width: 100%;
    float: none;
  }
}
.products-table {
  width: calc(100vw - (240px + 1.4rem));
  float: right;
  @media (max-width: 991px) {
    width: 100%;
    float: none;
  }
  .name {
    @media (max-width: 991px) {
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 2px !important;
    }
  }
  .type {
    @media (max-width: 991px) {
      font-size: 10px;
    }
  }
}
.modal {
  .custom-select {
    display: inline-block;
    position: relative;
    border-radius: 4px;
    background-color: #f1f1f1;
    padding: 10px;
    font-size: 16px;
    color: #333;
    border: none;
    outline: none;
    width: 200px;
    cursor: pointer;
  }

  .custom-select select {
    display: none;
  }

  .custom-select select option {
    padding: 10px;
  }

  .custom-select::after {
    content: '\25BC';
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    pointer-events: none;
  }
}
</style>
